import React, { useRef, useEffect } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Login.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function Login() {
  const history = useHistory();

  const { user, adminCheck } = useSelector((state) => state.fitMealsReducer);

  const adminEmail = useRef("");
  const adminPassword = useRef("");
  const userEmail = useRef("");
  const userPassword = useRef("");

  //check if user already logged in..
  if (user) {
    if (adminCheck) {
      history.push("/admin");
    } else {
      history.push("/dishes");
    }
  }

  useEffect(() => {
    document.querySelector(".login_card").classList.add("active");
  }, []);

  function handleUserSignIn() {
    auth
      .signInWithEmailAndPassword(
        userEmail.current.value,
        userPassword.current.value
      )
      .then((auth) => {
        history.push("/dishes");
      })
      .catch((err) => alert(err.message));
  }

  function handleAdminSignIn() {
    auth
      .signInWithEmailAndPassword(
        adminEmail.current.value,
        adminPassword.current.value
      )
      .then((auth) => {
        history.push("/admin");
      })
      .catch((err) => alert(err.message));
  }

  function handleSignUp() {
    auth
      .createUserWithEmailAndPassword(
        userEmail.current.value,
        userPassword.current.value
      )
      .then((auth) => {
        if (auth) {
          history.push("/user");
        }
      })
      .catch((err) => alert(err.message));
  }

  function getAdmin() {
    document.querySelector(".login_content").style.transform =
      "rotateY(0.5turn)";
    document.querySelector(".login_user").style.overflowY = "hidden";
    document.querySelector(".control_admin").style.backgroundColor = "white";
    document.querySelector(".control_admin").style.color = "black";
    document.querySelector(".control_admin").style.pointerEvents = "none";

    document.querySelector(".control_user").style.backgroundColor = "#00a2ff";
    document.querySelector(".control_user").style.color = "white";
    document.querySelector(".control_user").style.pointerEvents = "auto";
  }

  function getUser() {
    document.querySelector(".login_content").style.transform = "rotateY(0turn)";
    document.querySelector(".login_user").style.overflowY = "visible";

    document.querySelector(".control_admin").style.backgroundColor = "#00a2ff";
    document.querySelector(".control_admin").style.color = "white";
    document.querySelector(".control_admin").style.pointerEvents = "auto";

    document.querySelector(".control_user").style.backgroundColor = "white";
    document.querySelector(".control_user").style.color = "black";
    document.querySelector(".control_user").style.pointerEvents = "none";
  }

  return (
    <div className="login_card">
      <div className="control_flip">
        <button onClick={getAdmin} className="control_button control_admin">
          admin
        </button>
        <button onClick={getUser} className="control_button control_user">
          user
        </button>
      </div>

      <div className="login_content">
        <div className="login_user">
          <h1 className="title">Login-User</h1>
          <p className="subtitle">Sign in to access dishes..</p>
          <div className="login_body">
            <label>Email</label>
            <input ref={userEmail} type="email"></input>
            <label>Password</label>
            <input ref={userPassword} type="password"></input>
            <button onClick={handleUserSignIn}>
              Sign In <ArrowForwardIcon />
            </button>

            <p>Don't have an account?</p>
            <p>
              Set the email and password and{" "}
              <span onClick={handleSignUp} className="signUpButton">
                SignUp
              </span>
            </p>
          </div>
        </div>

        <div className="login_admin">
          <h1 className="title">Login-Admin</h1>
          <p className="subtitle">Sign in to access the admin page.</p>
          <div className="login_body">
            <label>Email</label>
            <input ref={adminEmail} type="email"></input>
            <label>Password</label>
            <input ref={adminPassword} type="password"></input>
            <button onClick={handleAdminSignIn}>
              Sign In <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
