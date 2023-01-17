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
                  {...register("position", {})}
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
// {
//   /* FRONTEND DEV */
// }
// <label className="check_box_leble">
//   <input
//     className="check_box"
//     type="radio"
//     value="Frontend developer"
//     {...register("position", {})}
//   />
//   Frontend developer
// </label>;
// {
//   /* BACKEND DEV */
// }
// <label className="check_box_leble">
//   <input
//     className="check_box"
//     type="radio"
//     value="Backend developer"
//     {...register("position", {})}
//   />
//   Backend developer
// </label>;
// {
//   /* DESIGNER */
// }
// <label className="check_box_leble">
//   <input
//     className="check_box"
//     type="radio"
//     value="Designer"
//     {...register("position", {})}
//   />
//   Designer
// </label>;
// {
//   /* Qa */
// }
// <label className="check_box_leble">
//   <input
//     className="check_box"
//     type="radio"
//     value="QA"
//     {...register("position", {})}
//   />
//   QA
// </label>;
