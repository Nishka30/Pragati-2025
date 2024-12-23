import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css/Card.css";

const Card = ({ image, title, description, link }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div
      className={`cardEvent ${isContentVisible ? "cardEvent--active" : ""}`}
      onClick={toggleContent}
    >
      <img src={image} alt={title} className="cardEvent__image" />
      <div
        className={`cardEvent__content ${
          isContentVisible ? "cardEvent__content--visible" : ""
        }`}
      >
        <h2 className="cardEvent__title">{title}</h2>
        <span className="cardEvent__description">{description}</span>
        <a
          href={link}
          className="cardEvent__button"
          onClick={(e) => e.stopPropagation()}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
