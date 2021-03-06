import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/img/Logo.png";

import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="AluraFlix" className="Logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
