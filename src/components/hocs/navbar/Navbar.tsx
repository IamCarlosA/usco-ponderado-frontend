/* eslint-disable arrow-body-style */
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Logo from "static/universidad-surcolombiana-50.png";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ padding: "0.5rem", marginBottom: "2rem" }}
    >
      <Toolbar>
        <img
          src={Logo}
          alt="Logo"
          className="navbarimgDesktop"
        />
      </Toolbar>
    </AppBar>
  );
};
