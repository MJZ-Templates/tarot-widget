import React from "react";

const InterpretationPage = () => {
  const selectedCards =
    JSON.parse(localStorage.getItem("selectedTarotCards")) || [];

  return (
    <div>
      <h1>점괘 해석</h1>
      <div className="interpretation-container">
        {selectedCards.length === 0 ? (
          <p>선택한 카드가 없습니다.</p>
        ) : (
          selectedCards.map((card) => (
            <div key={card.name} className="interpretation-card">
              <h2>{card.name}</h2>
              <p>{card.interpretation}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InterpretationPage;
