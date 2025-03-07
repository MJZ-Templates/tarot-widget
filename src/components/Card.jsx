const Card = ({ backImage, onSelect, isPlaced }) => {
  return (
    <div
      className={`card-container ${isPlaced ? "hidden" : ""}`}
      onClick={onSelect}
    >
      <div className="card">
        <img src={backImage} alt="타로 카드 뒷면" className="card-back" />
      </div>
    </div>
  );
};

export default Card;
