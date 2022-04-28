import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../context/useAuth';
import {
  Collection,
  getCollections,
  deleteCollection,
} from '../../services/collections';

import CollectionItem from './components/Collection';

import { Container, Header, ListCollections } from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [collections, setCollections] = useState<Collection[]>([]);

  const handleCreateCollection = () => {
    navigate('/create-or-update-collection');
  };

  const handleDeleteCollection = useCallback(
    async (id: string) => {
      await deleteCollection(id);
      if (currentUser?.email)
        getCollections(currentUser?.email).then(setCollections);
    },
    [currentUser?.email]
  );

  useEffect(() => {
    if (currentUser?.email)
      getCollections(currentUser?.email).then(setCollections);
  }, [currentUser?.email]);

  return (
    <Container>
      <Header>
        <Button onClick={handleCreateCollection} label="Nova coleção" />
      </Header>

      <ListCollections>
        {collections.map((collection) => (
          <CollectionItem
            key={collection.id}
            data={collection}
            deleteCollection={() => handleDeleteCollection(collection.id)}
          />
        ))}
      </ListCollections>
    </Container>
  );
};

export default Home;
