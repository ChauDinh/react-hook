import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  // const render = React.useRef(0);

  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // console.log("hello renders: ", render.current++);

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
