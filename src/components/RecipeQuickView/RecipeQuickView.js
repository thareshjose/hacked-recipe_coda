import React from "react";
import Modal from "react-modal";
import "./recipe-quick-view.css";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

const RecipeQuickView = ({ recipe, showPopup, togglePopup }) => {
  return (
    <div>
      <Modal
        isOpen={showPopup}
        onRequestClose={togglePopup}
        style={customStyles}
      >
        <button onClick={togglePopup} className="popup-close-btn">
          CLOSE
        </button>
        <div className="popup-container">
          <img src={recipe.image} alt={recipe.name} />
          <div className="popup-recipe-details">
            <p className="popup-recipe-title">{recipe.name}</p>
            <p className="popup-recipe-price">${recipe.price}</p>
            <p className="popup-recipe-category">{recipe.category}</p>
            <p className="popup-recipe-description">{recipe.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecipeQuickView;
