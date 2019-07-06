import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const divRef = useRef();

  const rect = useMeasure(divRef, [data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{loading ? "loading..." : data}</div>
      </div>
      {/* display the rectangle */}
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
