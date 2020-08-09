import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import "./Home.css";
import useFetch from "./../../hooks/useFetch";
import RecipeCard from "./../RecipeCard/RecipeCard";
import Loader from "./../Loader/Loader";

const Home = () => {
  let [recipes, setRecipes, isLoading] = useFetch();
  let searchTerm = "";

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  const filterRecipes = (filteredRecipes, input) => {
    searchTerm = input;
    recipes = filteredRecipes;
    setRecipes(recipes);
  };
  return (
    <div className="home-container">
      <Search filterRecipes={filterRecipes} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="recipes-container">
          {recipes.length === 0 && (
            <p className="zero-result-text">No recipes found...!</p>
          )}
          {recipes.map((recipe, index) => {
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                index={index}
                searchTerm={searchTerm}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
