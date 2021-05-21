import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "fitMeals",
  initialState: {
    user: null,
    adminCheck: false,
    meals: [
      {
        foodName: "Banana",
        foodImg:
          "https://www.learn-bulgarian.net/wp-content/uploads/2013/05/7-banana-bulgarian-vocabulary-banan.jpg",
        protein: "50",
        carbs: "40",
        fat: "30",
        calories: "70",
      },
      {
        foodName: "Orange",
        foodImg:
          "https://5.imimg.com/data5/KF/FK/MY-2662260/sweet-orange-essential-oil-500x500.png",

        protein: "60",
        carbs: "400",
        fat: "10",
        calories: "50",
      },
      {
        foodName: "Almonds",
        foodImg: "https://cdn.mos.cms.futurecdn.net/oDh2aBTkP5md9yoQLW7js.jpg",
        protein: "50",
        carbs: "40",
        fat: "30",
        calories: "70",
      },
      {
        foodName: "Eggs",
        foodImg:
          "https://www.simplyrecipes.com/thmb/akJysvaQmkQpLt7Q2_SfA_jr2PU=/800x533/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2014__07__hard-boiled-eggs-horiz-800-429f7e9948b84a6d84237e228f9d54f2.jpg",
        protein: "20",
        carbs: "60",
        fat: "90",
        calories: "120",
      },

      {
        foodName: "Cottage Cheese",
        foodImg:
          "http://cdn.shopify.com/s/files/1/2836/2982/products/cottage-cheese-1_grande.jpg?v=1529434175",
        protein: "20",
        carbs: "60",
        fat: "90",
        calories: "120",
      },

      {
        foodName: "Broccoli",
        foodImg:
          "https://www.jessicagavin.com/wp-content/uploads/2019/05/how-to-cook-broccoli-10-1200.jpg",
        protein: "20",
        carbs: "60",
        fat: "90",
        calories: "120",
      },

      {
        foodName: "Carrot",
        foodImg:
          "https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg",
        protein: "20",
        carbs: "60",
        fat: "90",
        calories: "120",
      },
    ],
  },
  reducers: {
    addMeal: (state, action) => {
      state.meals.push(action.payload);
    },
    removeMeal: (state, action) => {
      state.meals.splice(action.payload, 1);
    },
    editMeal: (state, action) => {
      state.meals[action.payload.index] = action.payload.currentMeal;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAdmin: (state, action) => {
      state.adminCheck = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMeal, removeMeal, editMeal, setUser, setAdmin } =
  counterSlice.actions;

export default counterSlice.reducer;
