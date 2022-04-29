import React, { useState } from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import ConfirmModal from '../../../../components/Modal';
import { Card } from '../../../../services/cards';
import { Collection } from '../../../../services/collections';

import { Container, EditButton, Label, RemoveButton } from './styles';

interface CardsItemProps {
  data: Card;
  collection: Collection;
  deleteCard: () => void;
}

const CardsItem = ({ data, deleteCard, collection }: CardsItemProps) => {
  const navigate = useNavigate();
  const { palette } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const handleEdit = () => {
    navigate(`/create-or-update-card`, {
      state: {
        card: data,
        collection,
      },
    });
  };

  return (
    <>
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={deleteCard}
        text="Tem certeza que deseja remover esse registro?"
      />
      <Container>
        <Label>{data.front}</Label>

        <EditButton onClick={handleEdit}>
          <FaPencilAlt size={24} color={palette.blue} />
        </EditButton>
        <RemoveButton onClick={() => setIsOpen(true)}>
          <FaTrashAlt size={24} color={palette.error} />
        </RemoveButton>
      </Container>
    </>
  );
};

export default CardsItem;
