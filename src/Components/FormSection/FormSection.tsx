import React from "react";
import "./FormSection.scss";

import { Form } from "Components/Form/Form";
import { TitleText } from "Components/reUseComonents/TitleText/TitleText";

const FormSection = () => {
  return (
    <div className="forms_conteiner">
      <TitleText text="POST" />
      <Form />
    </div>
  );
};

export { FormSection };
