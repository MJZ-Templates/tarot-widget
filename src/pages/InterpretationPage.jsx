import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components";

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
      <Title>{currentStep === 0 ? "Present" : "Future"} Results</Title>
      <InterpretationContainer>
        {currentCard ? (
          <Card>
            <CardImage src={currentCard.image} alt={currentCard.name} />
            <CardTitle>{currentCard.name}</CardTitle>
            <CardDescription>{currentCard.description}</CardDescription>
          </Card>
        ) : (
          <NoCardMessage>No selected cards.</NoCardMessage>
        )}
      </InterpretationContainer>
      <Button
        text={currentStep === 0 ? "Next" : "See Result"}
        onClick={handleNext}
      />
    </Container>
  );
};

export default InterpretationPage;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: #1e1037;
  color: #e0e0e0;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(255, 215, 0, 0.15);
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #efc94c;
  margin-bottom: 1rem;
  text-shadow: 0px 2px 4px rgba(255, 255, 255, 0.15);
`;

const InterpretationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const NoCardMessage = styled.p`
  font-size: 18px;
  color: rgba(203, 179, 255, 0.8);
  text-align: center;
`;

const Card = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid rgba(203, 179, 255, 0.3);
  border-radius: 12px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 3px 12px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const CardImage = styled.img`
  width: 180px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 3px 8px rgba(203, 179, 255, 0.2);
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: rgba(203, 179, 255, 0.8);
  line-height: 1.6;
  text-align: justify;
`;
