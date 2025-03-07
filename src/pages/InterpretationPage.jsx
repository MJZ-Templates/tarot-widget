import styled from "styled-components";

const InterpretationPage = () => {
  const selectedCards =
    JSON.parse(localStorage.getItem("selectedTarotCards")) || [];

  return (
    <Container>
      <Title>점괘 해석</Title>
      <InterpretationContainer>
        {selectedCards.length === 0 ? (
          <NoCardMessage>선택한 카드가 없습니다.</NoCardMessage>
        ) : (
          selectedCards.map((card) => (
            <Card key={card.name}>
              <CardImage src={card.image} alt={card.name} />
              <CardTitle>{card.name}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </Card>
          ))
        )}
      </InterpretationContainer>
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const NoCardMessage = styled.p`
  font-size: 18px;
  color: gray;
  text-align: center;
`;

const Card = styled.div`
  width: 200px;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
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
