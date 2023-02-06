import React from "react";
import Logo from "../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import SearchBar from "./SearchBar";
import Home from "./Home";

const Header = () => {
  return (
    <>
      <Home />
      <SearchBar />
    </>
  );
};

export default Header;
