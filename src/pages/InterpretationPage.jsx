import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

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
`;

const Title = styled.h1`
  margin: 1rem;
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

const CardImage = styled.img`
  width: 150px;
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
