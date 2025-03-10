import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Card, CardLabel } from "../components";
import tarotBackImage from "../assets/images-tarot-cards/tarot-card-back.png";
import { TAROT_CARD_LIST, hasViewedTarotToday } from "../utils/tarotUtils";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const SelectCardPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [canSelectCards, setCanSelectCards] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setShuffledCards(shuffleArray(TAROT_CARD_LIST));

    if (hasViewedTarotToday()) {
      alert(
        "You have already completed today's tarot reading. Please come back tomorrow."
      );
      setCanSelectCards(false);
    }
  }, []);

  const selectCard = (card) => {
    if (!canSelectCards) {
      alert(
        "You have already completed today's tarot reading. Please come back tomorrow."
      );
      return;
    }

    if (
      selectedCards.length >= 2 ||
      selectedCards.some((c) => c.name === card.name)
    ) {
      alert("Once a card is selected, it cannot be changed.");
      return;
    }

    setSelectedCards((prev) => [...prev, card]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (selectedCards.length === 2) {
        localStorage.setItem(
          "selectedTarotCards",
          JSON.stringify(selectedCards)
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedCards]);

  const goToNextPage = () => {
    navigate("/interpretation");
  };

  return (
    <Container>
      <Title>Select Your Tarot Cards</Title>
      <SelectionGuide>
        Think carefully about your question and choose two cards. <br />
        You can't change the cards you choose, and it's recommended that you
        only play Tarot once a day.
      </SelectionGuide>

      <SelectedCardContainer>
        <SelectedBox>
          <CardLabel text="Present" />
          {selectedCards[0] && (
            <SelectedCard src={tarotBackImage} alt="Selected Tarot Card" />
          )}
        </SelectedBox>

        <SelectedBox>
          <CardLabel text="Future" />
          {selectedCards[1] && (
            <SelectedCard src={tarotBackImage} alt="Selected Tarot Card" />
          )}
        </SelectedBox>
      </SelectedCardContainer>

      <CardScrollContainer>
        <CardScroll>
          {shuffledCards.map((card) => (
            <Card
              key={card.name}
              backImage={tarotBackImage}
              onSelect={() => selectCard(card)}
              isPlaced={selectedCards.some((c) => c.name === card.name)}
            />
          ))}
        </CardScroll>
      </CardScrollContainer>

      <Button
        text="Next"
        onClick={goToNextPage}
        disabled={selectedCards.length < 2 || !canSelectCards}
      />
    </Container>
  );
};

export default SelectCardPage;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #1e1037;
  color: #e0e0e0;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #efc94c;
  margin-bottom: 1rem;
`;

const SelectionGuide = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: rgba(239, 201, 76, 0.79);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const SelectedCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 40px 0 30px;
`;

const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100px;
  height: 150px;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
`;

const SelectedCard = styled.img`
  width: 80px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
`;

const CardScrollContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
  scrollbar-color: #cbb3ff transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cbb3ff;
    border-radius: 10px;
  }
`;

const CardScroll = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  padding: 10px;
  min-width: fit-content;
  width: max-content;
`;
