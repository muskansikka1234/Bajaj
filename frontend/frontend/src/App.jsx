import React, { useState } from "react";
import Select from "react-select";
import InputForm from "./components/InputForm";
import ResponseDisplay from "./components/ResponseDisplay";
import "./App.css";

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleResponse = (data) => {
    setResponseData(data);
  };

  const dropdownOptions = [
    { value: "numbers", label: "Numbers" },
    { value: "alphabets", label: "Alphabets" },
    { value: "highestAlphabet", label: "Highest Alphabet" },
  ];

  return (
    <div className="app-container">
      <div className="input-container">
        <label className="input-label"></label>
        <InputForm onResponse={handleResponse} />
      </div>

      {responseData && (
        <>
          <div className="dropdown-container">
            <label className="dropdown-label">Multi Filter</label>
            <Select
              options={dropdownOptions}
              isMulti
              onChange={(selected) => setSelectedOptions(selected.map(option => option.value))}
              className="dropdown"
            />
          </div>

          <ResponseDisplay responseData={responseData} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
