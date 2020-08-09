import React, { useState } from "react";
import "./RecipeCard.css";
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
          className="recipe-card-image-container"
          style={{ backgroundImage: `url('${recipe.image}')` }}
        >
          <p className="recipe-card-category">{`In ${recipe.category[0].toUpperCase()}${recipe.category.substring(
            1
          )}`}</p>
        </div>
        <div className="card-title-container">
          <div className="card-title-price-container">
            <p className="card-recipe-title">{recipe.name}</p>
            <p className="card-recipe-price">${recipe.price}</p>
          </div>
          <div className="card-icon">
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
        <div className="card-recipe-description">
          <p>{recipe.description}</p>
        </div>
        <button className="card-view-more-btn" onClick={togglePopup}>
          View
        </button>
      </div>
    </>
  );
};

export default RecipeCard;
