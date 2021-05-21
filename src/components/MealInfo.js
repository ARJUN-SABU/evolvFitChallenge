import React, { useEffect, useRef } from "react";

import "./MealInfo.css";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMeal, editMeal } from "../redux/fitMeals";

function MealInfo() {
  const { adminCheck } = useSelector((state) => state.fitMealsReducer);

  const mealName = useRef("");
  const mealImage = useRef("");
  const protein = useRef("");
  const fat = useRef("");
  const carbs = useRef("");
  const calories = useRef("");

  const params = useParams();
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector(".meal_info")?.classList.add("active");
  }, []);

  function newMeal() {
    let currentMeal = {
      foodName: mealName.current.value,
      foodImg: mealImage.current.value,
      protein: protein.current.value,
      carbs: carbs.current.value,
      fat: fat.current.value,
      calories: calories.current.value,
    };

    dispatch(addMeal(currentMeal));

    history.replace("/admin");
  }

  function changeMeal() {
    let updatedMeal = {
      index: params.id,
      currentMeal: {
        foodName: mealName.current.value,
        foodImg: mealImage.current.value,
        protein: protein.current.value,
        carbs: carbs.current.value,
        fat: fat.current.value,
        calories: calories.current.value,
      },
    };

    dispatch(editMeal(updatedMeal));
    history.replace("/admin");
  }

  function handleCancel() {
    history.replace("/admin");
  }

  return (
    <div className="meal_info">
      {adminCheck ? (
        <div className="info_content">
          <label>Meal Name</label>
          <input ref={mealName} type="text" placeholder="" />

          <label>url to image</label>
          <input ref={mealImage} type="text" placeholder="" />

          <label>Protein</label>
          <input ref={protein} type="text" placeholder="...gram" />

          <label>Carbs</label>
          <input ref={carbs} type="text" placeholder="...gram" />

          <label>Fat</label>
          <input ref={fat} type="text" placeholder="...gram" />

          <label>Calories</label>
          <input ref={calories} type="text" placeholder="...kcal" />

          <div className="info_buttons">
            <button onClick={handleCancel}>Cancel</button>
            {params.id === "null" && <button onClick={newMeal}>Add</button>}
            {params.id !== "null" && <button onClick={changeMeal}>Edit</button>}
          </div>
        </div>
      ) : (
        <div className="not_accessible">
          <h1>404! Page not found :(</h1>
          <h1>Please Login to continue!</h1>
        </div>
      )}
    </div>
  );
}

export default MealInfo;
