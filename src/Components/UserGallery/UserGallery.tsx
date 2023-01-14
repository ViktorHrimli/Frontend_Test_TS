import React, { useState, useEffect } from "react";

import "./UserGallery.scss";

import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Button";

import { usersApi } from "redux/userApi";
import { UserType } from "types/users";

type Props = {};

const UserGallery = (props: Props) => {
  const [pages, setPages] = useState(1);
  const [users, setUsers] = useState<UserType[]>([]);
  const [showBtn, setShowBtn] = useState(true);
  const { data, isLoading, error } = usersApi.useFetchAllUsersQuery(pages);

  const handleShowMore = () => {
    if (data && data.total_pages > pages) {
      setPages((prev) => (prev += 1));
    }
  };

  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>

      {error && <h1>Whaths hapened</h1>}

      {isLoading && <div>...Loading</div>}

      <ul className="gallery_list">
        {data?.users &&
          users.map((item) => <ItemsCard key={item.id} {...item} />)}
      </ul>
      {showBtn && (
        <div onClick={handleShowMore}>
          <Button text="Show more" />
        </div>
      )}
    </div>
  );
};

export { UserGallery };
