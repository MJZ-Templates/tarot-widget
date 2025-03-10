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
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: #d4afff;
  margin-bottom: 1rem;
`;

const InterpretationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`;

const NoCardMessage = styled.p`
  font-size: 18px;
  color: #cbb3ff;
  text-align: center;
`;

const Card = styled.div`
  width: 280px;
  padding: 20px;
  border: 2px solid #cbb3ff;
  border-radius: 12px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 3px 15px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;

const CardImage = styled.img`
  width: 180px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 3px 8px rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  color: #fff;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #d1c3ff;
  line-height: 1.6;
  text-align: justify;
`;
