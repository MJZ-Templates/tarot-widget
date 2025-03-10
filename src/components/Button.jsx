import styled from "styled-components";

const Button = ({ text, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${({ disabled }) =>
    disabled ? "#6a6a6a" : "linear-gradient(135deg, #8a2be2, #5e2a84)"};
  color: ${({ disabled }) => (disabled ? "#a0a0a0" : "#fff")};
  padding: 12px 50px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  margin-top: 30px;
  outline: none;
  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0px 4px 10px rgba(138, 43, 226, 0.5)"};

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "#6a6a6a" : "linear-gradient(135deg, #9b30ff, #682c93)"};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "0px 6px 12px rgba(138, 43, 226, 0.6)"};
  }

  &:focus {
    outline: none;
  }
`;
