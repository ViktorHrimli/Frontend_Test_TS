import React from "react";
import "./App.scss";

import { Header } from "./Components/Header/Header";
import { Hero } from "Components/Hero/Hero";
import { UserGallery } from "Components/UserGallery/UserGallery";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <UserGallery />
    </div>
  );
};

export { App };
