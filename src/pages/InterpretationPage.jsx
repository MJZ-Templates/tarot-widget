// src/pages/InterpretationPage.jsx
import React from "react";

const InterpretationPage = () => {
  const selectedCards =
    JSON.parse(localStorage.getItem("selectedTarotCards")) || [];

  return (
    <div>
      <h1>점괘 해석</h1>
      {selectedCards.map((card) => (
        <div key={card.name} className="interpretation">
          <h2>{card.name}</h2>
          <p>{card.interpretation}</p>
        </div>
      ))}
    </div>
  );
};

export default InterpretationPage;
