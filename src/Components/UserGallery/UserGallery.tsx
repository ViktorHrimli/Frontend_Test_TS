import React, { useState } from "react";

import "./UserGallery.scss";
// componetns
import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Buttons/Button";
import { Loader } from "Components/reUseComonents/Loader/Loader";
import { ErrorText } from "Components/reUseComonents/ErrorText/ErrorText";

//
import { usersApi } from "redux/userApi";

type Props = {};

const UserGallery = (props: Props) => {
  // local state
  const [pages, setPages] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  // request

  const { data, isLoading, error, isSuccess } =
    usersApi.useGetAllUsersQuery(pages);

  // change page and hide button
  const handleShowMore = () => {
    if (data && data.total_pages > pages) {
      setPages((prev) => (prev += 1));
    } else {
      setShowBtn(false);
    }
  };

  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>

      {isLoading && <Loader />}

      {error && <ErrorText text="Request filed" />}

      <ul className="gallery_list">
        {isSuccess &&
          data.users.map((item) => <ItemsCard key={item.id} {...item} />)}
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
