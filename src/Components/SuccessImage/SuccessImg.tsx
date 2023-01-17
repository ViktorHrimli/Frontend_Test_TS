import React from "react";
import "./SuccessImg.scss";

import success from "../../Images/success-image.svg";

const SuccssesImg = () => {
  return (
    <div className="conteiner_img">
      <img src={success} alt="Success phot" />
    </div>
  );
};

export { SuccssesImg };
