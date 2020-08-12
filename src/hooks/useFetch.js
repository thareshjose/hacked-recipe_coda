import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      // const response = await fetch("http://starlord.hackerearth.com/recipe");
      const response = await fetch(
        "      https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/recipe"
      );
      if (response.ok) {
        const recipes = await response.json();
        localStorage.setItem("recipes", JSON.stringify(recipes));
        setRecipes(recipes);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } else {
        console.log("error");
      }
    };
    fetchRecipes();
  }, []);

  return [recipes, setRecipes, isLoading];
};

export default useFetch;
