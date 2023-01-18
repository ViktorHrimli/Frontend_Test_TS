import React, { useState, useEffect } from "react";
import "./UploadInput.scss";

import { checkUploadFile } from "helpers";

type Props = {
  register: any;
  setError: any;
  clearErrors: any;
  errors: any;
  isValid: boolean;
};

const UploadInput: React.FC<Props> = ({
  register,
  setError,
  clearErrors,
  errors,
  isValid,
}) => {
  const [valueFakeInput, setValueFakeInput] = useState("");
  const [newErrors, setnewErrors] = useState(false);

  useEffect(() => {
    const fakeInput = document.querySelector(".fake_input");
    const lableInput = document.querySelector(".upload_lable");
    if (newErrors) {
      lableInput?.classList.add("errors_lable");
      fakeInput?.classList.add("errors");
    } else {
      lableInput?.classList.remove("errors_lable");
      fakeInput?.classList.remove("errors");
    }

    return () => {};
  }, [newErrors]);

  return (
    <>
      <div className="upload_input">
        {/* hide input */}
        <input
          id="upload"
          type="file"
          accept=".png, .jpg, .jpeg .webp"
          hidden={true}
          size={5000000}
          {...register("files", {
            required: {
              value: true,
              message: "Feilds required, photo must be (.img .png .jpeg)",
            },
            onChange(event: React.ChangeEvent<HTMLInputElement>) {
              if (event.target.files) {
                const name = event.target.files[0].name;
                const size = event.target.files[0].size;

                setValueFakeInput(name);
                if (checkUploadFile(name, size)) {
                  setnewErrors(false);
                  clearErrors("files");
                } else {
                  setnewErrors(true);
                  setError("files");
                }
              }
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

        {errors.files && (
          <span className="error_upload-input">
            Image must be .img .png .jpeg and no more 5 mb!
          </span>
        )}
      </div>
      <input
        className="button_submit"
        type="submit"
        value="Sign up"
        disabled={!isValid || newErrors}
      />
    </>
  );
};

export { UploadInput };
