import React from 'react';

import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Collection } from '../../../../services/collections';
import {
  Container,
  Image,
  EditButton,
  RemoveButton,
  Title,
  Content,
} from './styles';

interface CollectionItemProps {
  data: Collection;
  deleteCollection: () => void;
}

const CollectionItem = ({ data, deleteCollection }: CollectionItemProps) => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/create-or-update-collection`, {
      state: {
        collection: data,
      },
    });
  };

  const handleSelectCollection = () => {
    navigate(`/cards`, {
      state: {
        collection: data,
      },
    });
  };

  return (
    <Container>
      <Content onClick={handleSelectCollection}>
        <Image src={data.image} />
        <Title>{data.name}</Title>
      </Content>
      <EditButton onClick={handleEdit}>
        <FaPencilAlt size={24} color={palette.blue} />
      </EditButton>
      <RemoveButton onClick={deleteCollection}>
        <FaTrashAlt size={24} color={palette.error} />
      </RemoveButton>
    </Container>
  );
};

export default CollectionItem;
