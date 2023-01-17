import React from "react";
import "./ItemsCard.scss";

import { UserType } from "../../types/users";

const ItemsCard = (props: UserType) => {
  const { email, name, phone, photo, position } = props;
  return (
    <div className="conteiner_card">
      <div className="card_user">
        <img
          className="card_photo"
          src={photo}
          alt="Test Logo"
          width="70"
          height="70"
        />
        <div className="text_ex_tooltip">
          <p className="card_text">{name}</p>
          <div className="tooltip_content">
            <span>{name}</span>
          </div>
        </div>
        <div className="conteiner_text">
          <p className="card_text">{position}</p>
          <div className="text_ex_tooltip_email">
            <p className="card_text">{email}</p>
            <div className="tooltip_content_email">
              <span>{email}</span>
            </div>
          </div>
          <p className="card_text">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export { ItemsCard };
