import React, { useMemo, useRef, useState } from 'react';
import { Path, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Card } from '../../services/cards';
import Header from './components/Header';
import CardItem from './components/Card';

import Container from './styles';

interface Location extends Path {
  state: {
    cards: Card[];
  };
}

const Play: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { cards },
  } = useLocation() as Location;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<Card>(cards[currentIndex]);
  const maxIndex = useRef(cards.length - 1).current;
  const [showBack, setShowBack] = useState(false);

  const buttonLabel = useMemo(() => {
    if (currentIndex === maxIndex && showBack) {
      return 'Finalizar';
    }

    if (showBack) {
      return 'Próxima';
    }

    return 'Virar';
  }, [currentIndex, maxIndex, showBack]);

  const handleButtonClick = () => {
    if (currentIndex === maxIndex && showBack) {
      navigate('/home');
      return;
    }

    if (showBack) {
      const newCurrentIndex = currentIndex + 1;
      setCurrentIndex(newCurrentIndex);
      setCurrentCard(cards[newCurrentIndex]);
      setShowBack(false);
      return;
    }

    setShowBack(true);
  };

  return (
    <Container>
      <Header currentCard={currentIndex + 1} maxCards={cards.length} />
      <CardItem data={currentCard} showBack={showBack} />
      <Button label={buttonLabel} onClick={handleButtonClick} green />
    </Container>
  );
};

export default Play;
