import styled from "styled-components";

const Card = ({ backImage, onSelect, isPlaced }) => {
  return (
    <CardContainer isPlaced={isPlaced} onClick={onSelect}>
      <CardInner>
        <CardBack src={backImage} alt="Tarot card backs" />
      </CardInner>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 100px;
  height: 150px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  visibility: ${(props) => (props.isPlaced ? "hidden" : "visible")};

  &:hover {
    transform: scale(1.1);
  }
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
`;

const CardBack = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3);
  }
`;
