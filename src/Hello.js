import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
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

  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{loading ? "loading..." : data}</div>
      </div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
