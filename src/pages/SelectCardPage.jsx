import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      selectedCards.length >= 2 ||
      selectedCards.some((c) => c.name === card.name)
    ) {
      if (!toast.isActive("card-toast")) {
        toast.warn("Once a card is selected, it cannot be changed.", {
          toastId: "card-toast",
        });
      }
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
      <Title>Select Tarot Cards</Title>
      <SelectionGuide>
        Think about your concern, and carefully select 2 cards.
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
          <Label>Present</Label>
          {selectedCards[0] && (
            <SelectedCard
              src={tarotBackImage}
              alt="Selected Tarot Card Back"
              onClick={() => {
                if (!toast.isActive("card-toast")) {
                  toast.warn("Once a card is selected, it cannot be changed.", {
                    toastId: "card-toast",
                  });
                }
              }}
            />
          )}
        </SelectedBox>

        <SelectedBox>
          <Label>Future</Label>
          {selectedCards[1] && (
            <SelectedCard
              src={tarotBackImage}
              alt="Selected Tarot Card Back"
              onClick={() => {
                if (!toast.isActive("card-toast")) {
                  toast.warn("Once a card is selected, it cannot be changed.", {
                    toastId: "card-toast",
                  });
                }
              }}
            />
          )}
        </SelectedBox>
      </SelectedCardContainer>

      <Button
        text="Next"
        onClick={goToNextPage}
        disabled={selectedCards.length < 2}
      />

      <ToastContainer position="top-center" autoClose={2000} />
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

const Title = styled.h1`
  margin: 1rem;
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
  top: -15px;
  background: white;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 5px;
  border: 1px solid #000;
`;

const SelectedCard = styled.img`
  width: 70px;
  height: 105px;
  object-fit: contain;
  padding: 20px 16px;
`;
