import React, { useEffect, useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import {
  Container,
  Content,
  BackCard,
  FrontCard,
  Title,
  SubTitle,
  TitleContainter,
} from './styles';
import InputName from '../../components/InputName';
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
  const [attempts, setAttempts] = useState<number>(0);
  const [winner, setWinner] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState<string | null | undefined>(null);

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
      setAttempts(attempts + 1);
    }

    setStatusCards(cards);
  };

  const resetCards = () => {
    setFirstSelected(null);
    setSecondSelected(null);
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

    const hasWon = cards.every(card => card.match);
    if (hasWon) {
      setWinner(true);
    }
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
    }
  }, [firstSelected, secondSelected]);

  useEffect(() => {
    setTimeout(() => {
      if (winner) {
        alert(`vc ganhou em ${attempts} tentativas`);
      }
    }, 1100);
  }, [winner]);

  return (
    <Container>
      <TitleContainter>
        <Title>Jogo da Memoria</Title>
        {playerName && (
          <SubTitle>{`Player: ${playerName} / Tentativas: ${attempts}`}</SubTitle>
        )}
      </TitleContainter>
      {!playerName ? (
        <InputName onChange={name => setPlayerName(name)} />
      ) : (
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
      )}
    </Container>
  );
};

export default MemoryGame;
