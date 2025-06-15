import { GoogleGenerativeAI } from "@google/generative-ai";
import reportModel from "../models/reportModel.js";

const getReport = async (req, res) => {
  try {
    const report = await reportModel.findOne({ _id: req.params.id });
    res.status(200).json(report);
  } catch (error) {
    console.log(error + "get report");
    res.json({ success: false, message: error.message });
  }
};

// Utility function to save a report
const saveReport = async (report) => {
  const newReport = new reportModel(report);
  return await newReport.save();
};

const addReport = async (req, res) => {
  const report = req.body;
  try {
    const saved = await saveReport(report);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error + " add report");
    res.json({ success: false, message: error.message });
  }
};

const genReport = async (req, res) => {

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let prompt = process.env.REPORT_SECRET_SAUCE + "\n";

  const chat = req.body.chat;

  if (chat && Array.isArray(chat)) {
    for (const message of chat) {
      if (message.role === "user") {
        prompt += `User: ${message.content}\n`;
      } else if (message.role === "assistant") {
        prompt += `Assistant: ${message.content}\n`;
      } 
    }
  } 

  prompt += `\nPlease return the report strictly as a JSON object.`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    let text = response.text();

   

    // 🧽 Clean Gemini's markdown-wrapped code block
    text = text.trim();
    if (text.startsWith("```json")) {
      text = text
        .replace(/^```json/, "")
        .replace(/```$/, "")
        .trim();
    }

    let aiReport;
    try {
        aiReport = JSON.parse(text);
    } catch (parseErr) {
        console.error("❌ Failed to parse Gemini response:", text);
      return res
        .status(500)
        .json({
          message: "Failed to parse Gemini response as JSON",
          raw: text,
        });
    }

    // ✅ Create report object to match the schema
    const report = new reportModel({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        phone: req.body.phone,
        height: req.body.height,
        weight: req.body.weight,
        date: new Date().toISOString(),
        ...aiReport
      });  
      
      
      if (!aiReport.c_c || !aiReport.summary || !aiReport.history) {
        return res.status(500).json({ message: "Gemini response is missing required fields", aiReport });
      }
      

    const savedReport = await saveReport(report);
    res.status(201).json({ _id: savedReport._id });
  } catch (error) {
    console.error("❌ Error generating report:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export { getReport, addReport, genReport };
