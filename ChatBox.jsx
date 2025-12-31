// src/components/ChatBox.jsx
import React, { useState } from "react";
import { askQuestion } from "../api/queryApi";

function ChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [language, setLanguage] = useState("en");

  const handleAsk = async () => {
    if (!question) return;
    try {
      const data = await askQuestion(question, language);
      setAnswer(data.answer); // backend should return { answer: "..." }
    } catch (err) {
      setAnswer("Error fetching answer");
      console.error(err);
    }
  };

  return (
    <div className="chatbox glass-effect">
      <div>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="glass-effect"
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          {/* add more languages */}
        </select>
      </div>
      <input
        type="text"
        placeholder="Ask about startup funding..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="glass-effect"
      />
      <button onClick={handleAsk}>Ask</button>
      <div className="answer">{answer}</div>
    </div>
  );
}

export default ChatBox;
