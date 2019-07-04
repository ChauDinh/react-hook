import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div className="App">
      <div>count1: {count}</div>
      <div>count2: {count2}</div>
      <button
        onClick={() => {
          setCount(currentCount => currentCount + 1);
          setCount2(currentCount => currentCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default App;
