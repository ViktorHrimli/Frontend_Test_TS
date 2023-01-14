import React from "react";
import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import "./UserGallery.scss";

import { ItemsCard } from "Components/ItemsCard/ItemsCard";
import { Button } from "Components/reUseComonents/Button";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1";

type Props = {};

const UserGallery = (props: Props) => {
  const { data, error, isLoading, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await axios.get("/users?page=1&count=5").then((res) => res.data);
    },
  });

  return (
    <div className="gallery_conteiner">
      <h1 className="gallery_title">Working with GET request</h1>
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <ul className="gallery_list">
          {/* {data && data.map((item) => <ItemsCard key={item.key} {...item} /> )} */}
        </ul>
      )}
      <Button text="Show more" />
    </div>
  );
};

export { UserGallery };
