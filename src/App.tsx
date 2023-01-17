import React from "react";
import { useAppSelector } from "helpers";
import "./App.scss";

// components
import { Header } from "./Components/Header/Header";
import { Hero } from "Components/Hero/Hero";
import { UserGallery } from "Components/UserGallery/UserGallery";
import { FormSection } from "Components/FormSection/FormSection";
import { SuccssesImg } from "Components/SuccessImage/SuccessImg";

const App = () => {
  const isSuccesImg = useAppSelector((state) => state.succssesImg.flag);

  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <UserGallery />
      <FormSection />
      {isSuccesImg && <SuccssesImg />}
    </div>
  );
};

export { App };
