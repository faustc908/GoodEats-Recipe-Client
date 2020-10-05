import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "../Recipe/Recipe";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Appdesc from "../Appdesc/Appdesc";
import AppForm from "../AppForm/AppForm";
import RecipeForm from "../RecipeForm/RecipeForm";
import InputRecipe from "../InputRecipe/InputRecipe";
import config from "../config"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
require("dotenv").config();

// Favicon

library.add(faUtensils);

// API info & State

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const App = () => {

  //  States

  const [recipes, setRecipes] = useState([]);
  const [recipes1, updateRecipe] = useState([]);
  const [query, setQuery] = useState("banana");
  const [recipe, setRecipe] = useState([]);

  //  Delete recipe from database

  const removeRecipe = async (id) => {
    try {
      fetch(`${config.API_ENDPOINT}/recipe/${id}`, {
        method: "DELETE",
      });

      setRecipe(recipe.filter((recipe) => recipe.recipe_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //  Change states

  useEffect(() => {
    grabRecipe();
  }, []);

  useEffect(() => {
    grabRecipe();
  }, [recipes1]);

  // Fetches recipe from database and appends to DOM

  const grabRecipe = async () => {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/recipe`);
      const jsonData = await response.json();

      setRecipe(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  // API call for recipe search

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));
  }, [query, setRecipes]);

  // Render page

  return (
    <div className="App">
      <NavBar />
      <Appdesc />
      <p className="formHead">Please enter an ingredient</p>
      <AppForm onSearch={setQuery} />
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      <div>
        <InputRecipe updateRecipe={updateRecipe} />
        <RecipeForm recipe={recipe} removeRecipe={removeRecipe} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
