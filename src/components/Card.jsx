// src/components/Card.jsx
import React from "react";

const Card = ({ card, onSelect, isSelected }) => {
  return (
    <div
      className={`tarot-card ${isSelected ? "selected" : ""}`}
      onClick={() => !isSelected && onSelect(card)}
    >
      <img src={`/images-tarot-cards/${card.image}`} alt={card.name} />
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
