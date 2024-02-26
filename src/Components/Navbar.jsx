// import { css } from '@emotion/core'
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "bootstrap";

export const Navbar = () => {
  return (
    <nav className="container text-center">

      <div className="row">
        
        <div className="col">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            COMPANY
          </Link>
        </div>

        <div className="col">
          <Link to="/" style={{ margin: "0px 10px" }}>
            HOME
          </Link>
          <Link to="/about" style={{ margin: "0px 10px" }}>
            ABOUT
          </Link>
          <Link to="/services" style={{ margin: "0px 10px" }}>
            SERVICES
          </Link>
          <Link to="/portfolio" style={{ margin: "0px 10px" }}>
            PORTFOLIO
          </Link>
          <Link to="/pricing" style={{ margin: "0px 10px" }}>
            PRICING
          </Link>
          <Link to="/blog" style={{ margin: "0px 10px" }}>
            BLOG
          </Link>
          <Link to="/contact" style={{ margin: "0px 10px" }}>
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};
