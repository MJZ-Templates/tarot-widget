import React from "react";

const Card = ({ backImage, onSelect, isPlaced, position }) => {
  return (
    <div
      className={`card-container ${isPlaced ? "hidden" : ""}`}
      onClick={onSelect}
      style={{ transform: `translate(${position.left}px, ${position.top}px)` }}
    >
      <div className="card">
        <img src={backImage} alt="타로 카드 뒷면" className="card-back" />
      </div>
    </div>
  );
};

export default Card;
