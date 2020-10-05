import React, { useState } from "react";
import "./InputRecipe.css";
import config from "../config"

const InputRecipe = ({ updateRecipe }) => {
  const [description, setDescription] = useState("");

  // Post function to post recipes

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const header = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      };
      await fetch(`${config.API_ENDPOINT}/recipe`, header).then(async function (
        response
      ) {
        await response.json();
        updateRecipe();
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="input">
      <h1 className="appDesc">User Recipes</h1>
      <p>Enter your own favorite recipes below!</p>
      <form onSubmit={onSubmitForm}>
        <input
          className="inputBox"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="inputButton" type="button" onClick={onSubmitForm}>
          Add recipe
        </button>
      </form>
    </div>
  );
};

export default InputRecipe;
