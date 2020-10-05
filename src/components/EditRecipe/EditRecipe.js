import React, { Fragment, useState } from "react";
import "./EditRecipe.css";
import config from "../config"

const EditRecipe = ({ recipe }) => {
  const [description, setDescription] = useState(recipe.description);
  const [updateStatus, setUpdateStatus] = useState();

  // Edit recipe method

  const updateDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description: description };
      fetch(`${config.API_ENDPOINT}/recipe/${recipe.recipe_id}/${description}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(data => {
        console.log(data);
        if (data.status === 200)
          setUpdateStatus("updated");
        else
          setUpdateStatus("update failed");
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="inputForm">
        <div>
          <h4 className="editDesc">
            If you want to edit the recipe add the entire new recipe below
          </h4>
        </div>
        <div>
          <input
            className="inputBox2"
            type="text"
            value={description}
            onChange={updateDescriptionHandler}
          />
        </div>
        <div>
          <button
            className="inputButton"
            type="button"
            onClick={updateDescription}
          >
            Edit recipe
          </button>
        </div>
        <div>{updateStatus}</div>
      </div>
    </Fragment>
  );
};

export default EditRecipe;
