import React, { useState } from "react";
import "./UploadInput.scss";

type Props = {
  register?: any;
};

const UploadInput: React.FC<Props> = ({ register }) => {
  const [valueFakeInput, setValueFakeInput] = useState("");

  return (
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
          onChange(event: React.ChangeEvent<HTMLInputElement>) {
            if (event.target.files) {
              setValueFakeInput(event.target.files[0].name);
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
        required={true}
        value={valueFakeInput}
      />
    </div>
  );
};

export { UploadInput };
