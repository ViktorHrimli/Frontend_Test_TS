import React from "react";
import "./ItemsCard.scss";
import Cover from "../../Images/photo-cover.svg";

import { UserType } from "../../types/users";

const ItemsCard = (props: UserType) => {
  const { email, name, phone, photo, position } = props;
  return (
    <div className="conteiner_card">
      <div className="card_user">
        <img
          className="card_photo"
          src={photo ? photo : Cover}
          alt="Test Logo"
          width={70}
          height={70}
        />
        <p className="card_text">{name}</p>
        <div>
          <p className="card_text">{position}</p>
          <p className="card_text">{email}</p>
          <p className="card_text">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export { ItemsCard };
