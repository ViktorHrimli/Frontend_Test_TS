import React from "react";

import "./Button.scss";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <>
      <button className="buttons" type="button">
        {text}
      </button>
    </>
  );
};

export { Button };
