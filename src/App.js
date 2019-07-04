import React, { useEffect } from "react";
import "./App.css";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  useEffect(() => {
    console.log("render");
  }, [values.password, values.email]);

  return (
    <div className="App">
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
