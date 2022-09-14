import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/landingPage" className="brand nav">
              Startup 3
            </Link>
          </li>
          <li>
            <Link to="/landingPage" className="nav-home nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="nav-features nav">
              Features
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-blog nav">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-shop nav">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/search" className="nav-search nav">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                className="search-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/signIn" className="nav-signIn">
              <h3 className="text nav">Sign In</h3>
            </Link>
          </li>
          <li>
            <Link to="/signUp" className="nav-signUp">
              <button className="buttonSignUp">Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
