
import React, { useState } from 'react';
import GreetingComponent from "./GreetingComponent";
import "./index.css";


export default function App() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div className="App">
        <input className="grid-item1"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
      <GreetingComponent user={inputValue} />
    </div>
  );
}

