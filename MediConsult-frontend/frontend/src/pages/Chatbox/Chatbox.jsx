import React, { useContext, useState, useEffect } from "react";
import { CgSandClock } from "react-icons/cg";
import { IoSendSharp } from "react-icons/io5";
import { AppContext } from "../../context/AppContext";
import AiMessage from "./AiMessage";
import UserMessage from "./UserMessage";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Chatbox() {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(false);
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [generatingReport, setGeneratingReport] = useState(false);
  const [reportId, setReportId] = useState(null);
  const [chatComplete, setChatComplete] = useState(false);

  const { backendUrl } = useContext(AppContext);

  useEffect(() => {
    const fetchInitialMessage = async () => {
      setFetching(true);
  
      const reqMessage = {
        role: "system",
        content: `The patient is ${user.name}, ${user.age} years old, gender: ${user.gender}, blood group: ${user.bloodGroup}, height: ${user.height} cm, weight: ${user.weight}kg. Now greet the patient and ask for the symptoms.`,
      };
  
      setMessages([reqMessage]);
      console.log("Sending request message:", reqMessage);
  
      try {
        const response = await axios.post(`${backendUrl}/api/ai/chat`, {
          message: reqMessage.content
        },   {
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = response.data;
  
        console.log("Data Type of Response:", typeof data);
  
        const responseMessage = {
          role: data.role,
          content: data.content,
        };
  
        setMessages([reqMessage, responseMessage]);
        setProgress(0);
        console.log("Updated Messages (After Receiving Response):", [reqMessage, responseMessage]);
  
      } catch (error) {
        console.error("Error fetching data from the server", error);
      } finally {
        setFetching(false);
      }
    };
  
    fetchInitialMessage();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    setFetching(true);
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    console.log("Updated Messages (Before Sending):", updatedMessages);
    setInput("");

    try {
      const response = await axios.post(
        `${backendUrl}/api/ai/chat`, 
        { message: input }, 
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      const responseMessage = {
        role: data.role || "assistant",
        content: data.content,
      };

      setMessages([...updatedMessages, responseMessage]);
      
      if (data.progress) {
        setProgress(data.progress);
      }
      
      if (data.chat_complete || data.is_complete) {
        setChatComplete(true);
      }
    } catch (error) {
      console.error("Error fetching data from the server", error);
    }

    setInput("");
    setFetching(false);
  };

  const handleGenerateReport = async () => {
    const reqBody = {
      chat: messages,
      name: user.name,
      age: user.age,
      gender: user.gender,
      bloodGroup: user.bloodGroup,
      height: user.height,
      weight: user.weight,
      phone: user.phone,
      address: user.address,
    };
    setGeneratingReport(true);
    console.log("Request Body for Generating Report:", reqBody);
    try {
      const response = await axios.post(`${backendUrl}/api/ai/report`, reqBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      console.log("Report Generated Successfully:", response.data);
      setReportId(response.data._id);
    } catch (error) {
      console.error("Error generating report", error);
    } finally {
      setGeneratingReport(false);
    }
  };

  const navigateToReport = () => {
    navigate(`/report/${reportId}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with user info and progress */}
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold text-gray-800">Health Assistant</h1>
            <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
              <span>Name: {user.name}</span>
              <span>Age: {user.age}</span>
              <span>Gender: {user.gender}</span>
              <span>Blood Group: {user.bloodGroup}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-600 mr-2">Progress:</span>
              <span className="text-sm font-semibold text-blue-600">{progress}%</span>
            </div>

            {(chatComplete || progress === 100) && !generatingReport && (
              <button 
                onClick={handleGenerateReport}
                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                Generate Report
              </button>
            )}

            {generatingReport && (
              <button 
                className="px-4 py-2 bg-green-400 text-white text-sm font-medium rounded-md cursor-not-allowed"
                disabled
              >
                Generating...
              </button>
            )}

            {reportId && (
              <button 
                onClick={navigateToReport}
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                View Report
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4 max-w-4xl w-full mx-auto">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">Describe your symptoms or health concerns to get started</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              msg.role === "user" ? (
                <UserMessage key={index} msg={msg.content} />
              ) : (
                <AiMessage key={index} msg={msg.content} />
              )
            ))
          )}
        </div>
      </div>

      {/* Input area */}
      {progress !== 100 && (
        <div className="bg-white border-t p-4">
          <div className="max-w-4xl mx-auto flex items-center">
            <input
              type="text"
              value={input}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your symptoms or health concerns..."
              disabled={fetching}
            />
            <button
              onClick={handleSendMessage}
              disabled={fetching || !input.trim()}
              className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
            >
              {fetching ? (
                <CgSandClock className="h-6 w-6 animate-pulse" />
              ) : (
                <IoSendSharp className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}







{/* <div className="flex flex-col h-screen bg-gray-50">
      {/* Header with user info */}
      // <div className="bg-white shadow-sm p-4 border-b">
      //   <div className="max-w-4xl mx-auto flex justify-between items-center">
      //     <div className="space-y-1">
      //       <h1 className="text-xl font-semibold text-gray-800">Health Assistant</h1>
      //       <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
      //         <span>Name: {user.name}</span>
      //         <span>Age: {user.age}</span>
      //         <span>Gender: {user.gender}</span>
      //         <span>Blood Group: {user.bloodGroup}</span>
      //       </div>
      //     </div>
          
      //     <div className="flex items-center space-x-4">
          
      //         <div className="flex items-center">
      //           <span className="text-sm font-medium text-gray-600 mr-2">Progress:</span>
      //           <span className="text-sm font-semibold text-blue-600">{progress}%</span>
      //         </div>
            


      //       {(chatComplete || progress == 100) && (
      //         <button 
      //           onClick={handleGenerateReport}
      //           className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 transition-colors"
      //         >
      //           Generate Report
      //         </button>
      //       )}
      //     </div>
      //   </div>
      // </div>

      // {/* Chat messages area */}
      // <div className="flex-1 overflow-y-auto p-4 max-w-4xl w-full mx-auto">
      //   <div className="space-y-4">
      //     {messages.length === 0 ? (
      //       <div className="text-center py-10">
      //         <p className="text-gray-500">Describe your symptoms or health concerns to get started</p>
      //       </div>
      //     ) : (
      //       messages.map((msg, index) => (
      //         msg.role === "user" ? (
      //           <UserMessage key={index} msg={msg.content} />
      //         ) : (
      //           <AiMessage key={index} msg={msg.content} />
      //         )
      //       ))
      //     )}
      //   </div>
      // </div>

      // {/* Input area */}
      // {progress !== 100 && (
      //   <div className="bg-white border-t p-4">
      //     <div className="max-w-4xl mx-auto flex items-center">
      //       <input
      //         type="text"
      //         value={input}
      //         onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
      //         onChange={(e) => setInput(e.target.value)}
      //         className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      //         placeholder="Describe your symptoms or health concerns..."
      //         disabled={fetching}
      //       />
      //       <button
      //         onClick={handleSendMessage}
      //         disabled={fetching || !input.trim()}
      //         className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
      //       >
      //         {fetching ? (
      //           <CgSandClock className="h-6 w-6 animate-pulse" />
      //         ) : (
      //           <IoSendSharp className="h-6 w-6" />
      //         )}
      //       </button>
      //     </div>
      //   </div>
      // )}
    //</div> 