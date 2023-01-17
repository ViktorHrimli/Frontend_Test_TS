import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

//
import "./Form.scss";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "helpers/validateShema";
import { Inputs } from "types/users";
import { postNewUser } from "services/api";
import { usersApi } from "redux/userApi";

// components

import { ErrorText } from "Components/reUseComonents/ErrorText/ErrorText";
import { RadioButton } from "./RadioButton/RadioButton";

const initialState: Inputs = {
  name: "",
  email: "",
  phone: "",
  position: "",
  files: "",
};

const Form = () => {
  const [postUser, { isSuccess }] = usersApi.usePostNewUserMutation();
  const { data: newToken, refetch } = usersApi.useGetTokenQuery("");

  const [valueFakeInput, setValueFakeInput] = useState("");
  const [newUser, setNewUser] = useState(new FormData());
  const [token, setToken] = useState("");

  const {
    register,
    reset,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: initialState,
  });

  const onHandleSubmit: SubmitHandler<Inputs> = (data) => {
    setNewUser(postNewUser(data));

    if (newToken) {
      setToken(newToken.token);
      refetch();
    }

    reset();
  };

  useEffect(() => {
    // CREATE NEW USER
    if (newUser.get("email")) {
      postUser({ newUser, token });
    }
    return () => {};
  }, [newUser, postUser, token]);

  return (
    <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="conteiner_input">
        {/* NAME FIELD  */}
        <div>
          <input
            placeholder="Your name"
            className="input"
            minLength={2}
            {...register("name", {
              onChange: async () => {
                const value = watch("name");

                // CUSTOM ERRORS WHEN ENTER FIELDS
                await validateName.isValid(value).then((data) =>
                  data
                    ? clearErrors("name")
                    : setError("name", {
                        message: "Field required! must be at least 2 charters",
                      })
                );
              },
            })}
          />
          {errors?.name && <ErrorText text={errors.name.message} />}
        </div>
        {/* EMAIL FIELD */}
        <div className="">
          <input
            placeholder="Email"
            className="input"
            pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$"
            {...register("email", {
              onChange: async () => {
                const value = watch("email");

                // CUSTOM ERRORS WHEN ENTER FIELDS
                await validateEmail.isValid(value).then((data) =>
                  data
                    ? clearErrors("email")
                    : setError("email", {
                        message: "Email should be (yourmail@mail.domen)",
                      })
                );
              },
            })}
          />
          {errors?.email && <ErrorText text={errors.email.message} />}
        </div>
        {/* PHONE FIELD */}
        <div className="">
          <input
            placeholder="Phone"
            className="input"
            pattern="^[\+]{0,1}380([0-9]{9})$"
            {...register("phone", {
              onChange: async () => {
                const value = watch("phone");

                // CUSTOM ERRORS WHEN ENTER FIELDS
                await validatePhone.isValid(value).then((data) =>
                  data
                    ? clearErrors("phone")
                    : setError("phone", {
                        message: "+38 (XXX) XXX XXX",
                      })
                );
              },
            })}
          />
          {errors?.phone && <ErrorText text={errors.phone.message} />}
        </div>
      </div>

      {/* radio btn */}

      <RadioButton register={register} />

      <div className="upload_input">
        {/* hide input */}
        <input
          className="upload_hidden"
          id="upload"
          type="file"
          accept=".jpg, .jpeg, .png"
          required={true}
          size={5000000}
          {...register("files", {
            required: {
              value: true,
              message: "Feilds required, photo must be (.img .png .jpeg)",
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
          required={true}
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
