import React, { useState, useCallback } from "react";
import { Hello } from "./Hello";
import { Square } from "./Square";

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

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
      {favoriteNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default App;
