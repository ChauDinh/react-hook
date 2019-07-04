import React, { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  // const [hello, setHello] = useState(true);

  useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="App">
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
