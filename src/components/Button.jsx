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
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#6200ea")};
  color: ${({ disabled }) => (disabled ? "#666" : "#fff")};
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  margin: 20px;
  outline: none;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#3700b3")};
  }

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }
`;
