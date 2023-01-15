import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
//
import "./Form.scss";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  position: string;
  files: any;
};

const initialState: Inputs = {
  name: "",
  email: "",
  phone: "",
  position: "",
  files: "",
};

const Form = () => {
  const [valueFakeInput, setValueFakeInput] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialState,
  });

  const onHandleSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    // reset();
  };

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

      {/* radio btn */}
      <div className="conteiner_select">
        <p className="select_text">Select your position</p>
        <div className="conteiner_checkbox">
          {/* FRONTEND DEV */}
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
          {/* BACKEND DEV */}
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
          {/* DESIGNER */}
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
          {/* Qa */}
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

      <div className="upload_input">
        {/* hide input */}
        <input
          className="upload_hidden"
          id="upload"
          type="file"
          accept=".jpg, .jpeg, .png"
          {...register("files", {
            required: {
              value: true,
              message: "",
            },
            onChange(event) {
              setValueFakeInput(event.target.files[0].name);
            },
          })}
        />
        <label className="upload_lable" htmlFor="upload">
          Upload
        </label>
        {/* fake input */}
        <input
          className="fake_input"
          placeholder="Upload your photo"
          type="text"
          value={valueFakeInput}
        />
      </div>

      <input
        className="button_submit"
        type="submit"
        value="Submit"
        disabled={!isValid}
      />
    </form>
  );
};

export { Form };
