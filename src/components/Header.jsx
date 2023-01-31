import React from "react";
import Logo from "../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <header style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <div className="logo">
        <img src={Logo} alt="Logo do site" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Shop</Link>
          </li>
          <li>
            <Link to="/produtos">Catalogo</Link>
          </li>
          <li>
            <Link to="/contato">
              <BsCart style={{ fontSize: "24px" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
