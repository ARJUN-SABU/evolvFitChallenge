import React from "react";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import "./FoodCard.css";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeMeal } from "../redux/fitMeals";

function FoodCard(props) {
  function getNutriFacts(cardValue) {
    document.querySelector(`#card_${cardValue}`).style.transform =
      "rotateY(180deg)";
  }

  function getFoodName(cardValue) {
    document.querySelector(`#card_${cardValue}`).style.transform =
      "rotateY(0deg)";
  }

  const history = useHistory();
  const dispatch = useDispatch();

  function editFacts() {
    history.push(`/mealInfo/${props.index}`);
  }

  function removeFactCard() {
    dispatch(removeMeal(props.index));
  }

  return (
    <div className="card">
      <div className="card_content" id={`card_${props.index}`}>
        <div className="card_front">
          <img src={props.image} alt="foodImage" />

          <div className="front_info">
            <h2>{props.foodName}</h2>
            <p
              onClick={() => getNutriFacts(props.index)}
              className="info_button"
            >
              i
            </p>
          </div>
        </div>

        <div className="card_back">
          <div className="back_info">
            <div
              onClick={() => getFoodName(props.index)}
              className="back_button"
            >
              <ArrowBackIcon />
            </div>
            <h3>NutriFacts</h3>
          </div>
          <p>
            Protein <span>{props.protein}g</span>
          </p>
          <p>
            Carbs <span>{props.carbs}g</span>
          </p>
          <p>
            Fat <span>{props.fat}g</span>
          </p>
          <p>
            Calories <span>{props.calories}kcal</span>
          </p>

          <div
            style={{ display: props.hideDeleteEdit }}
            className="action_buttons"
          >
            <div onClick={editFacts} className="back_icons">
              <CreateIcon />
            </div>
            <div onClick={removeFactCard} className="back_icons">
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
