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
  top: -19px;
  left: 50%;
  transform: translateX(-50%);
  background: #5e2a84;
  padding: 6px 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #cbb3ff;
  border-radius: 8px;
  white-space: nowrap;
`;
