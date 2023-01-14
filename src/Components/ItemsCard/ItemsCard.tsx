import React from "react";
import "./ItemsCard.scss";
import Cover from "../../Images/photo-cover.svg";

type Props = {};

const ItemsCard = (props: Props) => {
  return (
    <div className="conteiner_card">
      <div className="card_user">
        <img
          className="card_photo"
          src={Cover}
          alt="Test Logo"
          width={70}
          height={70}
        />
        <p className="card_text">Salvador Stewart Flynn Thomas Salva...</p>
        <p className="card_text">
          Leading specialist of the department o...
          JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
        </p>
      </div>
    </div>
  );
};

export { ItemsCard };
