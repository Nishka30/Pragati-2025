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
      className={`card ${isContentVisible ? "card--active" : ""}`}
      onClick={toggleContent}
    >
      <img src={image} alt={title} className="card__image" />
      <div
        className={`card__content ${
          isContentVisible ? "card__content--visible" : ""
        }`}
      >
        <h2 className="card__title">{title}</h2>
        <span className="card__description">{description}</span>
        <a
          href={link}
          className="card__button"
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
