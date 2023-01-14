import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
//
import "./Form.scss";
import { Button } from "Components/reUseComonents/Buttons/Button";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
};

const initialState: Inputs = {
  name: "",
  email: "",
  phone: "",
  position: "",
};

const Form = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialState,
  });

  const onHandleSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="conteiner_input">
        <input
          placeholder="Your name"
          className="input"
          {...register("name", { required: true })}
        />
        <input
          placeholder="Email"
          className="input"
          {...register("email", { required: true })}
        />
        <input
          placeholder="Phone"
          className="input"
          {...register("phone", { required: true })}
        />
      </div>

      <div className="conteiner_select">
        <p className="select_text">Select your position</p>
        <div className="conteiner_checkbox">
          <label className="check_box_leble">
            <input
              className="check_box"
              type="radio"
              value="Frontend developer"
              {...register("position", {
                required: {
                  value: true,
                  message: "position is required",
                },
              })}
            />
            Frontend developer
          </label>
          <label className="check_box_leble">
            <input
              className="check_box"
              type="radio"
              value="Backend developer"
              {...register("position", {
                required: {
                  value: true,
                  message: "position is required",
                },
              })}
            />
            Backend developer
          </label>
          <label className="check_box_leble">
            <input
              className="check_box"
              type="radio"
              value="Designer"
              {...register("position", {
                required: {
                  value: true,
                  message: "position is required",
                },
              })}
            />
            Designer
          </label>

          <label className="check_box_leble">
            <input
              className="check_box"
              type="radio"
              value="QA"
              {...register("position", {
                required: {
                  value: true,
                  message: "position is required",
                },
              })}
            />
            QA
          </label>
        </div>
      </div>
    </form>
  );
};

export { Form };
