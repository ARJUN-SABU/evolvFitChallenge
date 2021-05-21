import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { useSelector } from "react-redux";
import { auth } from "../firebase";

import Logo from "./Logo";

import "./Navbar.css";

function Navbar() {
  const { user } = useSelector((state) => state.fitMealsReducer);
  console.log(user);

  function openSideBar() {
    document.querySelector(".nav_options_cover").style.width = "100vw";

    document.querySelector(".nav_options").style.display = "flex";

    document.querySelector(".menu").style.display = "none";
    document.querySelector(".menu_close").style.display = "flex";

    document.documentElement.style.overflow = "hidden";
  }

  function closeSideBar() {
    if (window.innerWidth <= 865) {
      document.querySelector(".nav_options_cover").style.width = "0";

      document.querySelector(".nav_options").style.display = "none";

      document.querySelector(".menu").style.display = "flex";
      document.querySelector(".menu_close").style.display = "none";

      document.documentElement.style.overflow = "scroll";
    }
  }

  function handleSignOut() {
    auth
      .signOut()
      .then(() => console.log("signedout"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="nav_logo">
          <Logo />
        </div>
      </Link>

      <div onClick={openSideBar} className="menu">
        <MenuIcon style={{ fontSize: "1.5rem" }} />
      </div>

      <div onClick={closeSideBar} className="menu_close">
        <CloseIcon style={{ fontSize: "2rem" }} />
      </div>

      <div className="nav_options_cover">
        <div className="nav_options">
          <Link
            onClick={closeSideBar}
            to="/admin"
            style={{ textDecoration: "none" }}
          >
            <p>Admin</p>
          </Link>
          <Link
            onClick={closeSideBar}
            to="/dishes"
            style={{ textDecoration: "none" }}
          >
            <p>Dishes</p>
          </Link>
          <Link
            onClick={() => {
              handleSignOut();
              closeSideBar();
            }}
            to={!user && "/login"}
            style={{ textDecoration: "none" }}
          >
            {user ? <p>Logout</p> : <p>Login</p>}
          </Link>
          <p className="nav_user">
            {user ? (
              <div>
                <p>{user.email.substring(0, 1).toUpperCase()}</p>
              </div>
            ) : (
              <div>
                <p>G</p>
                <span>Guest</span>
              </div>
            )}
          </p>
        </div>
        <div className="blue_bottom"></div>
      </div>
    </div>
  );
}

export default Navbar;
