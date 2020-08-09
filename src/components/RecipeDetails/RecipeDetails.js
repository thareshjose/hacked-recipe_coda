import React from "react";

function RecipeDetails(props) {
  let id = props.match.params.id;
  console.log(id);
  return (
    <div>
      <h1>Recipe Details Page</h1>
    </div>
  );
}

export default RecipeDetails;
