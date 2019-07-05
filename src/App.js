import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="App">
      <div>{loading ? "loading..." : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      {/* <button onClick={() => setHello(!hello)}>Toggle</button>
      {hello && <Hello />} */}
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      />
    </div>
  );
};

export default App;
