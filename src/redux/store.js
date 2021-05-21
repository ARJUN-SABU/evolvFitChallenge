import { configureStore } from "@reduxjs/toolkit";
import mealReducer from './fitMeals';

export default configureStore({
  reducer: {
      fitMealsReducer: mealReducer, 
  },
});
