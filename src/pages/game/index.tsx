import React, { useEffect, useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import {
  Container,
  Content,
  BackCard,
  FrontCard,
  Title,
  TitleContainter,
} from './styles';
import CardObj from '../../utils/cards';

interface CardObject {
  name: string;
  status: boolean;
  img: string;
  match: boolean;
  group: number;
}

const MemoryGame: React.FC = () => {
  const [statusCards, setStatusCards] = useState(
    CardObj.sort(() => Math.random() - 0.5),
  );
  const [firstSelected, setFirstSelected] = useState<CardObject | null>(null);
  const [secondSelected, setSecondSelected] = useState<CardObject | null>(null);
  // const [disableFlip, setDisableFlip] = useState(false);

  const handleClick = (data: CardObject): void => {
    const disableClick = statusCards.filter(card => card.status && !card.match);
    if (disableClick.length > 1) {
      return;
    }

    const cards = statusCards.map(card => {
      if (card.name === data.name) {
        return {
          ...card,
          status: !data.status,
        };
      }
      return card;
    });

    if (!firstSelected) {
      setFirstSelected(data);
    } else {
      setSecondSelected(data);
    }

    setStatusCards(cards);
  };

  const resetCards = () => {
    setFirstSelected(null);
    setSecondSelected(null);
    // setDisableFlip(false);
  };

  const notMatch = () => {
    const firstCard = firstSelected?.name;
    const secondCard = secondSelected?.name;

    const cards = statusCards.map(card => {
      if (card.name === firstCard || card.name === secondCard) {
        return {
          ...card,
          status: false,
        };
      }
      return card;
    });

    setTimeout(() => {
      setStatusCards(cards);
    }, 1000);

    resetCards();
  };

  const didMatch = () => {
    const firstCard = firstSelected?.name;
    const secondCard = secondSelected?.name;

    const cards = statusCards.map(card => {
      if (card.name === firstCard || card.name === secondCard) {
        return {
          ...card,
          status: true,
          match: true,
        };
      }
      return card;
    });

    setTimeout(() => {
      setStatusCards(cards);
    }, 1000);

    resetCards();
  };

  useEffect(() => {
    if (!firstSelected || !secondSelected) {
      return;
    }

    if (firstSelected.group === secondSelected.group) {
      didMatch();
    } else {
      notMatch();
      // setDisableFlip(true);
    }
  }, [firstSelected, secondSelected]);

  return (
    <Container>
      <TitleContainter>
        <Title>Jogo da Memoria</Title>
      </TitleContainter>
      <Content>
        {statusCards &&
          statusCards.map(card => (
            <ReactCardFlip isFlipped={card.status} key={card.name}>
              <FrontCard
                onClick={() => {
                  if (!card.match) {
                    handleClick(card);
                  } else {
                    console.log('nop');
                  }
                }}
              />
              <BackCard
                onClick={() => {
                  if (!card.match) {
                    handleClick(card);
                  } else {
                    console.log('nop2');
                  }
                }}
                backImg={card.img}
              />
            </ReactCardFlip>
          ))}
      </Content>
    </Container>
  );
};

export default MemoryGame;
