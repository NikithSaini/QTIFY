import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Search from "../SearchBar/SearchBar";
import Button from "../ButtonComponent/ButtonComponent";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Search />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
