import React, { useState, useCallback } from "react";
import { Hello } from "./Hello";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    n => {
      setCount(current => current + n);
    },
    [setCount]
  );

  return (
    <div className="App">
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
};

export default App;
