import React from "react";
import "./App.scss";

import { Header } from "./Components/Header/Header";
import { Hero } from "Components/Hero/Hero";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
    </div>
  );
};

export { App };
