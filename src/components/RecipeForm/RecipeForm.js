import React, { Fragment } from "react";
import "./RecipeForm.css";
import EditRecipe from "../EditRecipe/EditRecipe";

// Render for user added recipes

const ShowRecipe = ({ recipe, removeRecipe }) => {
  return (
    <Fragment>
      <div className="form">
        {recipe.map((recipe) => (
          <div key={recipe.recipe_id}>
            <p>{recipe.description}</p>
            <div>
              <EditRecipe recipe={recipe} />
            </div>
            <div>
              <button
                className="inputButton"
                type="submit"
                onClick={() => removeRecipe(recipe.recipe_id)}
              >
                Delete recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ShowRecipe;
