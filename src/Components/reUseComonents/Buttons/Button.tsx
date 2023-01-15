import React from "react";

import "./Button.scss";

type Props = {
  text: string;
  flag?: boolean;
};

const Button = ({ text, flag = false }: Props) => {
  return (
    <>
      <button className="buttons" type="button">
        {text}
      </button>
    </>
  );
};

export { Button };
