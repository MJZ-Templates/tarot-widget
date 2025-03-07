import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InterpretationPage = () => {
  const navigate = useNavigate();
  const selectedCards =
    JSON.parse(localStorage.getItem("selectedTarotCards")) || [];

  const [currentStep, setCurrentStep] = useState(0);

  const currentCard = selectedCards[currentStep];

  const handleNext = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else {
      navigate("/result");
    }
  };

  return (
    <Container>
      <Title>점괘 해석</Title>
      <InterpretationContainer>
        {currentCard ? (
          <Card>
            <CardLabel>{currentStep === 0 ? "현재" : "미래"}</CardLabel>
            <CardImage src={currentCard.image} alt={currentCard.name} />
            <CardTitle>{currentCard.name}</CardTitle>
            <CardDescription>{currentCard.description}</CardDescription>
          </Card>
        ) : (
          <NoCardMessage>선택한 카드가 없습니다.</NoCardMessage>
        )}
      </InterpretationContainer>

      <NextButton onClick={handleNext}>
        {currentStep === 0 ? "다음" : "결과보기"}
      </NextButton>
    </Container>
  );
};

export default InterpretationPage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InterpretationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NoCardMessage = styled.p`
  font-size: 18px;
  color: gray;
  text-align: center;
`;

const Card = styled.div`
  width: 250px;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CardLabel = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #000;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;

const NextButton = styled.button`
  display: flex;
  margin: 20px auto;
  padding: 10px 40px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: blue;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;
