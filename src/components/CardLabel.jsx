import styled from "styled-components";

const CardLabel = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default CardLabel;

const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  white-space: nowrap;
  transition: all 0.3s ease;
  z-index: 10;
`;
