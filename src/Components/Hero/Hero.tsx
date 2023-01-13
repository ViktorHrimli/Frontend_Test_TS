import { Button } from "Components/reUseComonents/Button";
import React from "react";

import "./Hero.scss";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="hero_conteiner">
      <h1 className="hero_title">Test assignment for front-end developer</h1>
      <p className="hero_text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button text="Sign up" />
    </div>
  );
};

export { Hero };
