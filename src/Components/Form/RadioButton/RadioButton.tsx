import React from "react";
import "./RadioButton.scss";

//
import { Loader } from "Components/reUseComonents/Loader/Loader";
import { usersApi } from "redux/userApi";

type Props = {
  register?: any;
};

const RadioButton: React.FC<Props> = ({ register }) => {
  const { data, isLoading, isSuccess } = usersApi.useGetPositionQuery("");

  return (
    <div className="conteiner_select">
      <p className="select_text">Select your position</p>
      <div className="conteiner_checkbox">
        {isLoading && <Loader />}

        {isSuccess &&
          data.positions.map(({ id, name }) => {
            return (
              <label key={id} className="check_box_leble">
                <input
                  className="check_box"
                  type="radio"
                  value={id}
                  required={true}
                  {...register("position", {
                    require: {
                      value: true,
                      message: "Fields is required",
                    },
                  })}
                />
                {name}
              </label>
            );
          })}
      </div>
    </div>
  );
};

export { RadioButton };
