import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

// style
import "./Form.scss";
// helpers, api

import {
  postNewUser,
  validateName,
  validateEmail,
  validatePhone,
} from "helpers";

import { Inputs } from "types/users";
import { usersApi } from "redux/userApi";
import { succsesPage } from "redux/userSlice";

// components
import { ErrorText } from "Components/reUseComonents/ErrorText/ErrorText";
import { RadioButton } from "./RadioButton/RadioButton";
import { UploadInput } from "./UploadInput/UploadInput";

const initialState: Inputs = {
  name: "",
  email: "",
  phone: "",
  position: "",
  files: "",
};

const Form = () => {
  const [postUser] = usersApi.usePostNewUserMutation();
  const { data: newToken, refetch } = usersApi.useGetTokenQuery("");

  const [newUser, setNewUser] = useState(new FormData());
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

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
      dispatch(succsesPage(true));
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
        {/* NAME FIELD  START */}

        <div className="wrapper_input">
          <input
            className="input"
            id="name"
            minLength={2}
            required={true}
            {...register("name", {
              required: {
                value: true,
                message: "Fields required",
              },
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
          <span>Name</span>
          {errors?.name && <ErrorText text={errors.name.message} />}
        </div>
        {/* NAME FIELD END */}

        {/* EMAIL FIELD START */}
        <div className="wrapper_input">
          <input
            className="input"
            required={true}
            pattern="^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$"
            {...register("email", {
              required: {
                value: true,
                message: "Fields required",
              },
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
          <span>Email</span>
          {errors?.email && <ErrorText text={errors.email.message} />}
        </div>
        {/* EMAIL FIELD END */}

        {/* PHONE FIELD START */}
        <div className="wrapper_input">
          <input
            className="input"
            required={true}
            pattern="^[\+]{0,1}380([0-9]{9})$"
            {...register("phone", {
              required: {
                value: true,
                message: "Fields required",
              },
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
          <span>Phone</span>
          {errors?.phone && <ErrorText text={errors.phone.message} />}
        </div>
        {/* PHONE FIELD START */}
      </div>
      {/* radio btn  */}
      <RadioButton register={register} />

      {/* Upload Input */}
      <UploadInput
        register={register}
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
        isValid={isValid}
      />
    </form>
  );
};

export { Form };
