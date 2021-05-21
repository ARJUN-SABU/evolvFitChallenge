import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./HomeScreen.css";

function HomeScreen() {
  const history = useHistory();

  //to handle fade animation on page load
  useEffect(() => {
    document.querySelector(".home_screen").classList.add("active");
  }, []);

  return (
    <div className="home_screen">
      <div className="home_title">
        <h1>WHERE</h1>
        <h1>FITNESS AND FOOD</h1>
        <h1>FALL IN LOVE :)</h1>
      </div>
      <div className="home_description">
        <p>Work Hard, Eat Fresh, Stay Healthy!</p>
        <p>Get expert mentorship and transform your life.</p>
      </div>
      <button onClick={() => history.push("/login")}>Get Started</button>
    </div>
  );
}

export default HomeScreen;
