import React, { Key, useEffect, useMemo, useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Path, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Collection } from '../../services/collections';
import { getCards, Card, deleteCard } from '../../services/cards';
import CardsItem from './components/CardsItem';

import {
  Container,
  InputContainer,
  InputIcon,
  Title,
  ListCards,
  Footer,
} from './styles';

interface Location extends Path {
  state: {
    collection: Collection;
  };
  key: Key;
}

const Cards: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { collection },
  } = useLocation() as Location;

  const [cards, setCards] = useState<Card[]>();
  const [search, setSearch] = useState('');

  const handleClickAddCard = () => {
    navigate('/create-or-update-card', {
      state: {
        collection,
      },
    });
  };

  const handleDeleteCard = async (id: string) => {
    await deleteCard(id);
    getCards(collection.id).then(setCards);
  };

  const data = useMemo(() => {
    if (!search) return cards;
    return cards?.filter((card) =>
      card.front.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [cards, search]);

  const handlePlayCards = () => {
    navigate('/play-cards', {
      state: {
        cards,
      },
    });
  };

  useEffect(() => {
    getCards(collection.id).then(setCards);
  }, [collection.id]);

  return (
    <Container>
      <Title>Coleção - {collection.name}</Title>
      <InputContainer>
        <InputIcon>
          <FcSearch size={36} />
        </InputIcon>
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </InputContainer>
      <Button onClick={handleClickAddCard} label="Novo Cartão" />

      <ListCards>
        {data?.map((card) => (
          <CardsItem
            key={card.id}
            data={card}
            deleteCard={() => handleDeleteCard(card.id)}
            collection={collection}
          />
        ))}
      </ListCards>

      <Footer>
        <Button label="Jogar!" green onClick={handlePlayCards} />
      </Footer>
    </Container>
  );
};

export default Cards;
