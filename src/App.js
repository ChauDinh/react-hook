import React, { useState, useRef } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const inputRef = useRef();
  const helloLog = useRef(() => console.log("hello"));

  const [hello, setHello] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setHello(!hello)}>Toggle</button>
      {hello && <Hello />}
      <input
        ref={inputRef}
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

      <button
        onClick={() => {
          inputRef.current.focus();
          helloLog.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default App;
