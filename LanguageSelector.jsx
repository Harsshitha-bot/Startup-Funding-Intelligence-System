import React from "react";

export default function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-selector">
      <label>Select Language: </label>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="ml">Malayalam</option>
        <option value="te">Telugu</option>
        <option value="kn">Kannada</option>
      </select>
    </div>
  );
}
