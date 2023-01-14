import React from "react";

import "./FormSection.scss";

import { Form } from "Components/Form/Form";
type Props = {};

const FormSection = (props: Props) => {
  return (
    <div className="form_conteiner">
      <h1 className="form_title">Working with POST request</h1>
      <Form />
    </div>
  );
};

export { FormSection };
