import React, { useState, useEffect } from "react";

import "./UserGallery.scss";
// componetns
import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Buttons/Button";
import { Loader } from "Components/reUseComonents/Loader/Loader";

//
import { usersApi } from "redux/userApi";
import { UserType } from "types/users";

type Props = {};

const UserGallery = (props: Props) => {
  // local state
  const [pages, setPages] = useState(1);
  const [users, setUsers] = useState<UserType[]>([]);
  const [showBtn, setShowBtn] = useState(true);
  // request
  const { data, isLoading, error } = usersApi.useFetchAllUsersQuery(pages);
  // change page and hide button
  const handleShowMore = () => {
    if (data && data.total_pages > pages) {
      setPages((prev) => (prev += 1));
    } else {
      setShowBtn(false);
    }
  };
  // save new user and re-render copmonetns
  useEffect(() => {
    if (data) {
      setUsers((prev) => prev.concat(data.users));
    }
  }, [data]);

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>

      {isLoading && <Loader />}

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
