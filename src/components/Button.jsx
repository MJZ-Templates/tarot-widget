// src/components/Button.jsx
import React from "react";

const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="tarot-button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
