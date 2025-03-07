import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";
import tarotBackImage from "../assets/images-tarot-cards/tarot-card-back.png";
import { TAROT_CARD_LIST } from "../utils/tarotUtils";

const shuffleArray = (array) => {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
};

const SelectCardPage = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setShuffledCards(shuffleArray(TAROT_CARD_LIST));
  }, []);

  const selectCard = (card) => {
    if (
      selectedCards.length < 2 &&
      !selectedCards.some((c) => c.name === card.name)
    ) {
      setSelectedCards((prev) => [...prev, card]);
    }
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
      <h1>타로 카드 선택</h1>
      <SelectionGuide>
        마음 속으로 고민을 생각하며, 신중하게 카드 2장을 선택해주세요.
      </SelectionGuide>
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
      <SelectedCardContainer>
        <SelectedBox>
          <Label>현재</Label>
          {selectedCards[0] && (
            <SelectedCard src={tarotBackImage} alt="선택된 타로 카드 뒷면" />
          )}
        </SelectedBox>
        <SelectedBox>
          <Label>미래</Label>
          {selectedCards[1] && (
            <SelectedCard src={tarotBackImage} alt="선택된 타로 카드 뒷면" />
          )}
        </SelectedBox>
      </SelectedCardContainer>

      <Button
        text="다음으로"
        onClick={goToNextPage}
        disabled={selectedCards.length < 2}
      />
    </Container>
  );
};

export default SelectCardPage;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const SelectionGuide = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const CardScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px 0;
  justify-content: center;
`;

const CardScroll = styled.div`
  display: flex;
  gap: 8px;
  width: max-content;
  padding: 10px;
`;

const SelectedCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  position: relative;
`;

const SelectedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 120px;
  padding: 10px;
  gap: 6px;
  border: 2px solid #000;
  border-radius: 10px;
`;

const Label = styled.span`
  position: absolute;
  top: -35px;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 8px;
`;

const SelectedCard = styled.img`
  width: 70px;
  height: 105px;
  object-fit: contain;
  padding: 20px 16px;
`;
