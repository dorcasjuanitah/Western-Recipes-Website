import React from 'react';

const RecipeCard = ({ title, image, description, cookingTime, instructions }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h3>{title}</h3>
      <h5>{cookingTime}</h5>
      <p>{description}</p>
      <p>{instructions}</p>
    </div>
  );
};

export default RecipeCard;