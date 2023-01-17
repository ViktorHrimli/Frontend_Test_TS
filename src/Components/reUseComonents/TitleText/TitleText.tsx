import React from "react";
import "./TitleText.scss";

type Props = {
  text: string;
};

const TitleText: React.FC<Props> = ({ text }) => {
  return <h1 className="title_heder_sections">Working with {text} request</h1>;
};

export { TitleText };
