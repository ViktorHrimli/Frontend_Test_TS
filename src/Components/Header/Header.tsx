import React from "react";
import "./Header.scss";

import Logo from "../../Images/Logo.svg";

import { Button } from "Components/reUseComonents/Buttons/Button";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header_conteiner">
      <div className="icons_task">
        <img src={Logo} alt="Test Logo" />
      </div>
      <div className="buttons_conteiner">
        <Button text="Users" />
        <Button text="Sign up" />
      </div>
    </div>
  );
};

export { Header };
