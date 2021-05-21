import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Dishes from "./components/Dishes";
import MealInfo from "./components/MealInfo";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setAdmin } from "./redux/fitMeals";

import "./App.css";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [admin, setAdmin] = useHistory();

  // async function goToAdmin() {
  //   history.push("/admin");
  // }

  auth.onAuthStateChanged((user) => {
    // console.log("User is >>>>", user);
    dispatch(setUser(user));
    if (user) {
      user.getIdTokenResult().then((idTokenResult) => {
        // console.log(idTokenResult.claims.admin);
        dispatch(setAdmin(idTokenResult.claims.admin));
      });
    } else dispatch(setAdmin(false));
  });

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/mealInfo/:id">
            <MealInfo />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/dishes">
            <Dishes />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
