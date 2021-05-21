import React, { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./Dishes.css";
import FoodCard from "./FoodCard";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import zIndex from "@material-ui/core/styles/zIndex";
import Typewriter from "typewriter-effect";
import SearchIcon from "@material-ui/icons/Search";

function Admin() {
  const { meals, user } = useSelector((state) => state.fitMealsReducer);

  const searchItem = useRef("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.querySelector(".dishes").classList.add("active");
  }, []);

  function hideTyping() {
    document.querySelector(".search_box").style.color = "white";
    document.querySelector(".search_typing").style.display = "none";
  }

  function addAnimation() {
    document.querySelector(".dishes").classList.add("active");
  }

  return (
    <div className="dishes">
      {user ? (
        <>
          <div className="search">
            <div className="search_typing">
              <p>
                <span className="search_icon">
                  <SearchIcon />
                </span>{" "}
                <span>Search: </span>
              </p>
              <div>
                <Typewriter
                  options={{
                    strings: [
                      "Fruit Salad",
                      "Chicken",
                      "Milk",
                      "Eggs",
                      "Vegetables",
                    ],
                    autoStart: true,
                    loop: true,
                    // deleteSpeed: 3,
                    pauseFor: 100,
                  }}
                />
              </div>
            </div>
            <input
              onChange={() => setSearchValue(searchItem.current.value)}
              ref={searchItem}
              type="search"
              className="search_box"
              onFocus={hideTyping}
            />
          </div>
          <div className="food_container">
            {meals.map((data, index) => {
              if (
                data.foodName.toLowerCase().includes(searchValue.toLowerCase())
              ) {
                return (
                  <div className="food_card">
                    <FoodCard
                      key={index}
                      index={index}
                      foodName={data.foodName}
                      image={data.foodImg}
                      protein={data.protein}
                      carbs={data.carbs}
                      fat={data.fat}
                      calories={data.calories}
                      hideDeleteEdit={"none"}
                    />
                  </div>
                );
              }
            })}
          </div>
        </>
      ) : (
        <div className="not_accessible_dishes">
          <h1>404! Page not found!</h1>
          <h1>Please Login to continue!</h1>
        </div>
      )}
    </div>
  );
}

export default Admin;
