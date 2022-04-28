import React, { useMemo, useState } from 'react';
import { Path, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Collection } from '../../services/collections';
import { addNewCard, Card, updateCard } from '../../services/cards';

import {
  Container,
  Title,
  Subtitle,
  Content,
  Form,
  Back,
  Front,
  Label,
  Input,
} from './styles';

interface Location extends Path {
  state: {
    collection: Collection;
    card?: Card;
  };
}

const CreateOrUpdateCard: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { collection, card },
  } = useLocation() as Location;

  const [front, setFront] = useState(card?.front || '');
  const [back, setBack] = useState(card?.back || '');

  const showButton = useMemo(() => front && back, [front, back]);

  const handleSubmit = async () => {
    if (card) {
      await updateCard(card?.id, {
        front,
        back,
        collectionId: collection.id,
      });
    } else {
      await addNewCard({
        collectionId: collection.id,
        front,
        back,
      });
    }

    navigate('/cards', {
      state: {
        collection,
      },
    });
  };

  const buttonLabel = useMemo(
    () => (card ? 'Salvar alterações' : 'Criar'),
    [card]
  );

  const subtitle = useMemo(
    () =>
      card
        ? 'Atualize os dados da frente e do verso do flashcard'
        : 'Preencha os dados da frente e do verso do flashcard',
    [card]
  );

  return (
    <Container>
      <Title>Coleção - {collection.name}</Title>
      <Subtitle>{subtitle}</Subtitle>

      <Content>
        <Form>
          <Front>
            <Label>Frente</Label>
            <Input
              placeholder="Frente"
              value={front}
              onChange={(e) => setFront(e.target.value)}
            />
          </Front>

          <Back>
            <Label>Verso</Label>
            <Input
              placeholder="Verso"
              value={back}
              onChange={(e) => setBack(e.target.value)}
            />
          </Back>
        </Form>

        {showButton && <Button onClick={handleSubmit} label={buttonLabel} />}
      </Content>
    </Container>
  );
};

export default CreateOrUpdateCard;
