import React, { useState } from "react";
import "./App.scss";

// components
import { Header } from "./Components/Header/Header";
import { Hero } from "Components/Hero/Hero";
import { UserGallery } from "Components/UserGallery/UserGallery";
import { FormSection } from "Components/FormSection/FormSection";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <UserGallery />
      <FormSection />
    </div>
  );
};

export { App };
