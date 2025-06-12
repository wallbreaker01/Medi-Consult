import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let chatSession;

async function initializeChat() {
  if (!chatSession) {
    chatSession = await model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text:
                process.env.CHAT_SECRET_SAUCE ||
                'You are a helpful medical assistant. Always respond in JSON format like: {"message":"...","progress":number}.',
            },
          ],
        },
      ],
    });
  }
  return chatSession;
}

export async function handleChat(req, res) {
  try {
    const userMessage = req.body?.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Missing 'message' in request body." });
    }

    const chat = await initializeChat();
    const result = await chat.sendMessage(userMessage);
    const raw = result.response.text();

    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    res.status(200).json({
      role: "assistant",
      content: parsed.message,
      progress: parsed.progress,
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}
