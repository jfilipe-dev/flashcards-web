import React from 'react';
import { Card } from '../../../../services/cards';

import { Container, Back, Front, Label } from './styles';

interface CardProps {
  data: Card;
  showBack: boolean;
}

const CardItem = ({ data, showBack }: CardProps) => {
  return (
    <Container>
      <Front showBack={showBack}>
        <Label>{data.front}</Label>
      </Front>

      {showBack && (
        <Back>
          <Label>{data.back}</Label>
        </Back>
      )}
    </Container>
  );
};

export default CardItem;
