import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import tarotBackImage from "../assets/images-tarot-cards/tarot-card-back.png";
import { TAROT_CARD_LIST } from "../utils/tarotUtils";

const SelectCardPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

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
    }
  }, [selectedCards]);

  const goToNextPage = () => {
    navigate("/interpretation");
  };

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

      {/* 다음으로 버튼 */}
      <button
        className={`next-button ${
          selectedCards.length === 2 ? "active" : "disabled"
        }`}
        onClick={goToNextPage}
        disabled={selectedCards.length < 2}
      >
        다음으로
      </button>
    </div>
  );
};

export default SelectCardPage;
