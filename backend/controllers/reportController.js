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



// import OpenAI from "openai";
// import reportModel from "../models/reportModel.js";

// // Initialize OpenAI with your API key
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Utility function to get a single report by ID
// const getReport = async (req, res) => {
//   try {
//     const report = await reportModel.findOne({ _id: req.params.id });
//     res.status(200).json(report);
//   } catch (error) {
//     console.log(error + "get report");
//     res.json({ success: false, message: error.message });
//   }
// };

// // Utility function to save a report to the database
// const saveReport = async (report) => {
//   const newReport = new reportModel(report);
//   return await newReport.save();
// };

// // Controller to add a new report to the database
// const addReport = async (req, res) => {
//   const report = req.body;
//   try {
//     const saved = await saveReport(report);
//     res.status(201).json(saved);
//   } catch (error) {
//     console.log(error + " add report");
//     res.json({ success: false, message: error.message });
//   }
// };

// // Controller to generate a new report using the OpenAI API
// const genReport = async (req, res) => {
  
//   // Build the messages array for the OpenAI API call
//   // The API expects an array of objects, not a single string.
//   const messages = [];

//   // Add the system prompt first. This sets the role of the AI.
//   messages.push({
//     role: "system",
//     content: process.env.REPORT_SECRET_SAUCE,
//   });

//   const chat = req.body.chat;

//   // Append the user's chat history to the messages array
//   if (chat && Array.isArray(chat)) {
//     for (const message of chat) {
//       if (message.role === "user" || message.role === "assistant") {
//         messages.push({
//           role: message.role,
//           content: message.content,
//         });
//       }
//     }
//   }

//   // Add a final user message to strictly request JSON output
//   messages.push({
//     role: "user",
//     content: `Please return the report strictly as a JSON object.`,
//   });

//   try {
//     // Call the OpenAI chat completions API
//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // You can change this to your preferred model
//       messages: messages,
//       response_format: { type: "json_object" } // Tell the model to explicitly return a JSON object
//     });
    
//     let text = response.choices[0].message.content;

//     // 🧽 Clean OpenAI's markdown-wrapped code block if it exists
//     text = text.trim();
//     if (text.startsWith("```json")) {
//       text = text.replace(/^```json/, "").replace(/```$/, "").trim();
//     }

//     let aiReport;
//     try {
//       aiReport = JSON.parse(text);
//     } catch (parseErr) {
//       console.error("❌ Failed to parse OpenAI response:", text);
//       return res.status(500).json({
//         message: "Failed to parse OpenAI response as JSON",
//         raw: text,
//       });
//     }

//     // ✅ Create report object to match the schema
//     const report = new reportModel({
//       name: req.body.name,
//       age: req.body.age,
//       gender: req.body.gender,
//       address: req.body.address,
//       phone: req.body.phone,
//       height: req.body.height,
//       weight: req.body.weight,
//       date: new Date().toISOString(),
//       ...aiReport,
//     });

//     // Check for required fields from the AI response
//     if (!aiReport.c_c || !aiReport.summary || !aiReport.history) {
//       return res.status(500).json({
//         message: "OpenAI response is missing required fields",
//         aiReport,
//       });
//     }

//     const savedReport = await saveReport(report);
//     res.status(201).json({ _id: savedReport._id });
//   } catch (error) {
//     console.error("❌ Error generating report:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// export { getReport, addReport, genReport };