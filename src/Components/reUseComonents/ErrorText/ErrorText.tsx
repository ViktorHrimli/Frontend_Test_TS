import React from "react";
import "./ErrorText.scss";

type Props = {
  text?: string;
};

const ErrorText = (props: Props) => {
  return <p className="error_text">{props.text}</p>;
};

export { ErrorText };
