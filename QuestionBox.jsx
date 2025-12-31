import React from "react";

export default function QuestionBox({ question, setQuestion, handleAsk, loading }) {
  return (
    <div className="question-box glass-effect">
      <textarea
        placeholder="Ask about startup funding..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
      />
      <button onClick={handleAsk} disabled={loading}>
        {loading ? "Fetching..." : "Ask"}
      </button>
    </div>
  );
}
