import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, CardLabel } from "../components";

const ResultPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("selectedTarotCards"));
    if (storedCards) {
      setSelectedCards(storedCards);
    }
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>Tarot Reading Results</Title>
      {selectedCards.length === 2 ? (
        <>
          <ResultContainer>
            <Card>
              <CardLabel text="Present" />
              <CardImage
                src={selectedCards[0].image}
                alt={selectedCards[0].name}
              />
              <CardTitle>{selectedCards[0].name}</CardTitle>
              <TagContainer>
                {selectedCards[0].tag.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </TagContainer>
              <CardDescription>
                {selectedCards[0].interpretation}
              </CardDescription>{" "}
            </Card>

            <Card>
              <CardLabel text="Future" />
              <CardImage
                src={selectedCards[1].image}
                alt={selectedCards[1].name}
              />
              <CardTitle>{selectedCards[1].name}</CardTitle>
              <TagContainer>
                {selectedCards[1].tag.map((tag, index) => (
                  <Tag key={index}>#{tag}</Tag>
                ))}
              </TagContainer>
              <CardDescription>
                {selectedCards[1].interpretation}
              </CardDescription>{" "}
            </Card>
          </ResultContainer>
          <RetryMessage>
            Come back tomorrow for another tarot reading 👋
          </RetryMessage>
          <Button text="Select Again" onClick={handleGoHome} />
        </>
      ) : (
        <NoCardMessage>No selected cards.</NoCardMessage>
      )}
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  background-color: #1e1037;
  color: #e0e0e0;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #d4afff;
  margin-bottom: 1.5rem;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const NoCardMessage = styled.p`
  font-size: 18px;
  color: #cbb3ff;
  text-align: center;
`;

const Card = styled.div`
  width: 280px;
  padding: 30px;
  border: 2px solid #cbb3ff;
  border-radius: 12px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 3px 15px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  opacity: 0;
  animation: fadeIn 0.6s ease-in-out forwards;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 20px rgba(255, 255, 255, 0.3);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CardImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 3px 8px rgba(255, 255, 255, 0.2);
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 12px 0;
  color: #fff;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0;
`;

const Tag = styled.span`
  background: rgba(203, 179, 255, 0.3);
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #e0e0e0;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(203, 179, 255, 0.5);
  }
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #d1c3ff;
  line-height: 1.6;
  text-align: justify;
`;

const RetryMessage = styled.p`
  font-size: 16px;
  color: #cbb3ff;
  margin: 30px 0 0;
`;
