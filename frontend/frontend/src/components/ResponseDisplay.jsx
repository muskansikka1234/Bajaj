import React from "react";
import "./ResponseDisplay.css";

const ResponseDisplay = ({ responseData, selectedOptions }) => {
  const filteredResponse = selectedOptions.map((option) => ({
    label: option.label,
    value: responseData[option.value]?.join(", ") || "None",
  }));

  return (
    <div className="response-display">
      <h3>Filtered Response</h3>
      {filteredResponse.map((item, index) => (
        <p key={index}>
          <strong>{item.label}:</strong> {item.value}
        </p>
      ))}
    </div>
  );
};

export default ResponseDisplay;
