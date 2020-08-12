import React from "react";
import Modal from "react-modal";
import "./recipe-quick-view.scss";

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
    <div className="popup">
      <Modal
        isOpen={showPopup}
        onRequestClose={togglePopup}
        style={customStyles}
      >
        <button onClick={togglePopup} className="close-button">
          CLOSE
        </button>
        <div className="popup__block">
          <img src={recipe.image} alt={recipe.name} />
          <div className="popup__details">
            <p className="popup__title">{recipe.name}</p>
            <p className="popup__price">${recipe.price}</p>
            <p className="popup__category">{recipe.category}</p>
            <p className="popup__description">{recipe.description}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RecipeQuickView;
