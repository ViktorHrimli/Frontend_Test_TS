import React from "react";

import "./UserGallery.scss";

import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Button";

type Props = {};

const UserGallery = (props: Props) => {
  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>
      <ul className="gallery_list">
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
        <ItemsCard />
      </ul>
      <Button text="Show more" />
    </div>
  );
};

export { UserGallery };
