import styled from "styled-components";

const Card = ({ backImage, onSelect, isPlaced }) => {
  return (
    <CardContainer isPlaced={isPlaced} onClick={onSelect}>
      <CardInner>
        <CardBack src={backImage} alt="타로 카드 뒷면" />
      </CardInner>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 70px;
  height: 105px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease-in-out;
  visibility: ${(props) => (props.isPlaced ? "hidden" : "visible")};
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
`;

const CardBack = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
