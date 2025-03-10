import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

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
      <Title>Results</Title>
      {selectedCards.length === 2 ? (
        <>
          <ResultContainer>
            <Card>
              <CardLabel>Present</CardLabel>
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
              <CardLabel>Future</CardLabel>
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  margin: 1rem;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
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

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px 0;
`;

const Tag = styled.span`
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.4;
`;
