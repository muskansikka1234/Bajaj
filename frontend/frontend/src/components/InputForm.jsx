import React, { useState } from "react";
import "./InputForm.css";

const InputForm = ({ onResponse }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: inputValue,
      });

      const result = await response.json();
      onResponse(result);
    } catch (error) {
      console.error("Error:", error);
      onResponse({ error: "Invalid JSON or server error" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <div className="input-container">
        <label htmlFor="api-input" className="input-label">API Input</label>
        <textarea
          id="api-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='{"data":["M","1","334","4","B"]}'
          required
          className="input-textarea"
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default InputForm;
