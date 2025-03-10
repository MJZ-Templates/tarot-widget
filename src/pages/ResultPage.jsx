import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardLabel } from "../components";
import { getTodayUTCString } from "../utils/tarotUtils";

const ResultPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("selectedTarotCards"));
    if (storedCards && storedCards.length === 2) {
      setSelectedCards(storedCards);
    }

    const todayString = getTodayUTCString();
    const lastViewedDate = localStorage.getItem("lastTarotViewedDate");

    if (lastViewedDate !== todayString) {
      localStorage.setItem("lastTarotViewedDate", todayString);
    }
  }, []);

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
              </CardDescription>
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
              </CardDescription>
            </Card>
          </ResultContainer>
          <RetryMessage>
            Come back tomorrow for another tarot reading 👋
          </RetryMessage>
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
  box-shadow: 0px 4px 12px rgba(255, 215, 0, 0.15);
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #efc94c;
  margin-bottom: 2rem;
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
  border: 1px solid rgba(203, 179, 255, 0.3);
  border-radius: 12px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 3px 12px rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  opacity: 0;
  animation: fadeIn 0.6s ease-in-out forwards;
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
  background: rgba(203, 179, 255, 0.2);
  padding: 6px 12px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #e0e0e0;
  transition: background 0.3s ease, transform 0.2s ease-in-out;

  &:hover {
    background: rgba(203, 179, 255, 0.4);
    transform: scale(1.05);
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
