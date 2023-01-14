import React from "react";

import "./UserGallery.scss";

import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Button";

import { usersApi } from "redux/userApi";

type Props = {};

const UserGallery = (props: Props) => {
  const { data, isLoading, error } = usersApi.useFetchAllUsersQuery(1);

  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>

      {error && <h1>Whaths hapened</h1>}

      {isLoading && <div>...Loading</div>}

      <ul className="gallery_list">
        {data?.users &&
          data.users.map((item) => <ItemsCard key={item.id} {...item} />)}
      </ul>

      <Button text="Show more" />
    </div>
  );
};

export { UserGallery };
