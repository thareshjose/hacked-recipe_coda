import React, { useState } from "react";
import "./RecipeCard.scss";
import RecipeQuickView from "./../RecipeQuickView/RecipeQuickView";

const RecipeCard = ({ recipe, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      {showPopup && (
        <RecipeQuickView
          recipe={recipe}
          showPopup={showPopup}
          togglePopup={togglePopup}
        />
      )}
      <div className="recipe-card">
        <div
          className="recipe-card__image"
          style={{ backgroundImage: `url('${recipe.image}')` }}
        >
          <p className="recipe-card__category">{`In ${recipe.category[0].toUpperCase()}${recipe.category.substring(
            1
          )}`}</p>
        </div>
        <div className="recipe-card__header">
          <p className="recipe-card__title">{recipe.name}</p>
          <p className="recipe-card__price">${recipe.price}</p>
          <div className="recipe-card__icon">
            {isFavorite ? (
              <img
                src="/Assets/Icons/Icon feather-heart-color.png"
                alt="favourite"
                onClick={toggleFavorite}
              />
            ) : index % 2 === 0 ? (
              <img
                src="/Assets/Icons/Icon feather-heart-white.png"
                alt="favourite"
                onClick={toggleFavorite}
              />
            ) : (
              <img
                src="/Assets/Icons/Icon feather-heart.png"
                alt="favourite"
                onClick={toggleFavorite}
              />
            )}
          </div>
        </div>
        <div className="recipe-card__description">
          <p>{recipe.description}</p>
        </div>
        <button className="recipe-card__button" onClick={togglePopup}>
          View
        </button>
      </div>
    </>
  );
};

export default RecipeCard;
