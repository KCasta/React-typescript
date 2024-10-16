import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <div>
      <Greeting name={"Gabby"} message={"welcome"} />
      <Counter />
    </div>
  );
};

export default App;
