import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import tarotBackImage from "../assets/images-tarot-cards/tarot-card-back.png";
import { TAROT_CARD_LIST } from "../utils/tarotUtils";

const SelectCardPage = ({ onSelectionComplete }) => {
  const [selectedCards, setSelectedCards] = useState([]);

  const selectCard = (card, index) => {
    if (
      selectedCards.length < 2 &&
      !selectedCards.some((c) => c.index === index)
    ) {
      setSelectedCards((prev) => [...prev, { ...card, index }]);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      localStorage.setItem("selectedTarotCards", JSON.stringify(selectedCards));
      setTimeout(onSelectionComplete, 1000); // 1초 후 해석 페이지로 이동
    }
  }, [selectedCards]);

  return (
    <div>
      <h1>타로 카드 선택</h1>

      {/* 카드 선택 영역 */}
      <div className="card-grid">
        {Array.from({ length: 22 }).map((_, index) => (
          <Card
            key={index}
            backImage={tarotBackImage}
            onSelect={() => selectCard(TAROT_CARD_LIST[index], index)}
            isSelected={selectedCards.some((c) => c.index === index)}
            isPlaced={selectedCards.some((c) => c.index === index)}
          />
        ))}
      </div>

      {/* 선택한 카드 배치 영역 */}
      <div className="selected-card-container">
        <div className="selected-box">
          <h2>현재</h2>
          {selectedCards[0] && (
            <img
              src={tarotBackImage}
              alt="선택된 타로 카드 뒷면"
              className="selected-card"
            />
          )}
        </div>
        <div className="selected-box">
          <h2>미래</h2>
          {selectedCards[1] && (
            <img
              src={tarotBackImage}
              alt="선택된 타로 카드 뒷면"
              className="selected-card"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCardPage;
