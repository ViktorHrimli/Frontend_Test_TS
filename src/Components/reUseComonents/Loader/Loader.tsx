import React from "react";
import "./Loader.scss";
type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader };
