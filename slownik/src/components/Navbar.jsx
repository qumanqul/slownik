import React, {useState, useEffect, useContext, use} from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {

    return(
         <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/WMBP-lg-duze.jpg"
          alt="Logo"
          className="logo"
        />
      </div>

        <div className="navbar-center">
        <a id="slownik" href="/">Słownik</a>
        </div>

      <div className="navbar-right">
        <a href="/writers">Pisarze</a>
        <a href="#">
          Dostępność
        </a>
      </div>
    </nav>
    )
}

export default Navbar;