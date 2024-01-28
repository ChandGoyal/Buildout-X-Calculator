import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        if (input === "") {
          setResult("Error: Incomplete Expression");
        } else {
          setResult(eval(input));
        }
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
          (item, index) => (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default App;
