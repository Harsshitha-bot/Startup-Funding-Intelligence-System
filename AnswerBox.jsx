import React from "react";

export default function AnswerBox({ answer }) {
  return (
    <div className="answer-box glass-effect">
      <h3>Answer:</h3>
      <p>{answer}</p>
    </div>
  );
}
