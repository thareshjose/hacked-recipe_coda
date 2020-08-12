import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img
        src="/Assets/Images/pizza-slice.png"
        alt="pizza"
        className="loader__image"
      />
    </div>
  );
};

export default Loader;
