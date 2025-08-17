// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// let chatSession;

// async function initializeChat() {
//   if (!chatSession) {
//     chatSession = await model.startChat({
//       history: [
//         {
//           role: "user",
//           parts: [
//             {
//               text:
//                 process.env.CHAT_SECRET_SAUCE ||
//                 'You are a helpful medical assistant. Always respond in JSON format like: {"message":"...","progress":number}.',
//             },
//           ],
//         },
//       ],
//     });
//   }
//   return chatSession;
// }

// export async function handleChat(req, res) {
//   try {
//     const userMessage = req.body?.message;

//     if (!userMessage) {
//       return res.status(400).json({ error: "Missing 'message' in request body." });
//     }

//     const chat = await initializeChat();
//     const result = await chat.sendMessage(userMessage);
//     const raw = result.response.text();

//     const cleaned = raw
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     const parsed = JSON.parse(cleaned);

//     res.status(200).json({
//       role: "assistant",
//       content: parsed.message,
//       progress: parsed.progress,
//     });
//   } catch (err) {
//     console.error("Chat error:", err);
//     res.status(500).json({ error: "Something went wrong." });
//   }
// }



import OpenAI from "openai";

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let chatSession = null;

async function initializeChat() {
  if (!chatSession) {
    // OpenAI's API doesn't use a "chat session" object in the same way.
    // Instead, you manage the conversation history as an array of messages.
    // This is the initial "system" message that sets the assistant's role.
    chatSession = [
      {
        role: "system",
        content:
          process.env.CHAT_SECRET_SAUCE ||
          'You are a helpful medical assistant. Always respond in JSON format like: {"message":"...","progress":number}.',
      },
    ];
  }
  return chatSession;
}

export async function handleChat(req, res) {
  try {
    const userMessage = req.body?.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Missing 'message' in request body." });
    }

    const chatHistory = await initializeChat();

    // Add the new user message to the chat history.
    chatHistory.push({ role: "user", content: userMessage });

    // Send the entire chat history to the OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // You can change this to any available model
      messages: chatHistory,
    });

    const rawResponse = response.choices[0].message.content;

    const cleanedResponse = rawResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleanedResponse);

    // Add the assistant's response to the chat history for subsequent calls
    chatHistory.push({ role: "assistant", content: rawResponse });

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
