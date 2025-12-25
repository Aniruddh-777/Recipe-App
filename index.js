import { getRecipeCard } from "./getRecipeCard.js";
// import { getCuisineCard } from "./getCuisine.js";

const cardParentContainer = document.querySelector(".main");
const cuisineParentContainer = document.querySelector(".cuisine-filter");
const searchBox = document.querySelector(".input");

const RECIPEURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let searchValue = "";
let filteredArrOfRecipes = [];
let arrOfSelectedCuisine = [];

const createElement = (element) => document.createElement(element);

const getData = async (URL) => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const response = await getData(RECIPEURL);
const recipes = response?.meals || [];

const mappedRecipes = recipes.map((recipe, index) => ({
  ID: index + 1,
  TranslatedRecipeName: recipe.strMeal,
  Cuisine: recipe.strArea,
  TotalTimeInMins: Math.floor(Math.random() * 60) + 10,
  "image-url": recipe.strMealThumb,
}));

// const cuisines = await getData(CUISINEURL);

const getFilteredData = () => {
  return searchValue.length > 0
    ? mappedRecipes.filter((recipe) =>
        recipe.TranslatedRecipeName.toLowerCase().includes(searchValue)
      )
    : mappedRecipes;
};

const searchInputHandler = (event) => {
  searchValue = event.target.value.toLowerCase();
  const filteredData = getFilteredData();
  cardParentContainer.innerHTML = "";
 getRecipeCard(filteredData, cardParentContainer, createElement);

};

// const handleCusineClick = (event) => {
//   const id = event.target.dataset.id;
//   const isSelected = event.target.checked;
//   const selectedCuisine = cuisines.reduce(
//     (acc, cur) => (cur.ID === acc ? cur.Cuisine : acc),
//     id
//   );
//   arrOfSelectedCuisine = isSelected
//     ? [...arrOfSelectedCuisine, selectedCuisine]
//     : arrOfSelectedCuisine.filter((cuisine) => cuisine !== selectedCuisine);
//   const filteredArrOfCuisine = getFilteredData();
//   cardParentContainer.innerHTML = "";

//   getRecipeCard(filteredArrOfCuisine, cardParentContainer, createElement);
// };

searchBox.addEventListener("keyup", searchInputHandler);

// cuisineParentContainer.addEventListener("click", handleCusineClick);

getRecipeCard(mappedRecipes, cardParentContainer, createElement);

// getCuisineCard(cuisines, cuisineParentContainer, createElement);

// cardParentContainer.addEventListener("click", (event) => {
//   const cardId = event.target.dataset.id;
//   if (cardId) {
//     localStorage.clear();
//     localStorage.setItem("id", cardId);
//     location.href = "single-recipe.html";
//   }
// });

// console.log(cuisines);
