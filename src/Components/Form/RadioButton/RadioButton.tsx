import React from "react";

import "./RadioButton.scss";
type Props = {
  register?: any;
};

const RadioButton: React.FC<Props> = ({ register }) => {
  if (!register) return <div></div>;
  return (
    <div className="conteiner_select">
      <p className="select_text">Select your position</p>
      <div className="conteiner_checkbox">
        {/* FRONTEND DEV */}
        <label className="check_box_leble">
          <input
            className="check_box"
            type="radio"
            value="Frontend developer"
            {...register("position", {})}
          />
          Frontend developer
        </label>
        {/* BACKEND DEV */}
        <label className="check_box_leble">
          <input
            className="check_box"
            type="radio"
            value="Backend developer"
            {...register("position", {})}
          />
          Backend developer
        </label>
        {/* DESIGNER */}
        <label className="check_box_leble">
          <input
            className="check_box"
            type="radio"
            value="Designer"
            {...register("position", {})}
          />
          Designer
        </label>
        {/* Qa */}
        <label className="check_box_leble">
          <input
            className="check_box"
            type="radio"
            value="QA"
            {...register("position", {})}
          />
          QA
        </label>
      </div>
    </div>
  );
};

export { RadioButton };
