import React from "react";
import "./Search.css";

const Search = ({ filterRecipes }) => {
  const recipes = JSON.parse(localStorage.getItem("recipes"));

  const searchRecipe = (e) => {
    const input = e.target.value;
    // setSearchTerm(input);
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(input)
    );
    filterRecipes(filteredRecipes, input);
  };
  return (
    <div className="search-container">
      <img
        src="Assets/Icons/Icon feather-search.png"
        alt="search"
        className="search-icon"
      />
      <input
        type="text"
        placeholder="Search your favourite recipe..."
        onChange={searchRecipe}
      />
    </div>
  );
};

export default Search;
