// src/pages/SelectCardPage.jsx
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { TAROT_CARD_LIST } from "../utils/tarotUtils";

const SelectCardPage = ({ onSelectionComplete }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = (card) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      localStorage.setItem("selectedTarotCards", JSON.stringify(selectedCards));
      onSelectionComplete();
    }
  }, [selectedCards]);

  return (
    <div>
      <h1>Select tarot cards</h1>
      <div className="card-grid">
        {TAROT_CARD_LIST.map((card) => (
          <Card
            key={card.name}
            card={card}
            onSelect={selectCard}
            isSelected={selectedCards.includes(card)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectCardPage;
