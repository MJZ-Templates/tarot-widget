// src/pages/ResultPage.jsx
import React, { useEffect, useState } from "react";

const ResultPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("selectedTarotCards"));
    if (storedCards) {
      setSelectedCards(storedCards);
    }
  }, []);

  return (
    <div>
      <h1>점괘 결과</h1>
      {selectedCards.map((card) => (
        <div key={card.name} className="result">
          <h2>{card.name}</h2>
          <p>{card.interpretation}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultPage;
