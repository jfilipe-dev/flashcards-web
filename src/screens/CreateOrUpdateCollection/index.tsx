import React, { Key, useMemo, useState } from 'react';
import { useLocation, Path, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Title, Subtitle } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValiationErros from '../../utils/getValiationErros';
import { addNewCollection, updateCollection } from '../../services/collections';
import { useAuth } from '../../context/useAuth';

interface Location extends Path {
  state?: {
    collection?: {
      id: string;
      name: string;
      description: string;
      image: string;
    };
  };
  key: Key;
}

interface Errors {
  name?: string;
  description?: string;
  image?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  image: Yup.string().required('A imagem é obrigatória'),
});

const CreateOrUpdateCollection: React.FC = () => {
  const { state } = useLocation() as Location;
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const subtitle = useMemo(() => {
    return state && state?.collection
      ? `Atualize os dados necessários da coleção`
      : 'Preencha os dados referente à coleção a ser criada';
  }, [state]);

  const title = useMemo(() => {
    return state && state?.collection ? `Atualizar coleção` : 'Nova coleção';
  }, [state]);

  const buttonLabel = useMemo(() => {
    return state && state?.collection ? 'Salvar alterações' : 'Cadastrar';
  }, [state]);

  const [name, setName] = useState(state?.collection?.name || '');
  const [description, setDescription] = useState(
    state?.collection?.description || ''
  );
  const [image, setImage] = useState(state?.collection?.image || '');

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async () => {
    setErrors({});

    const data = {
      name,
      description,
      image,
    };

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      if (state?.collection) {
        await updateCollection(state.collection.id, data);
      } else if (currentUser?.email) {
        await addNewCollection(data, currentUser?.email);
      }

      navigate('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorsValidate = getValiationErros(error);
        setErrors(errorsValidate);
      }
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <Container>
        <Subtitle>{subtitle}</Subtitle>

        <Input
          label="Nome coleção"
          placeholder="insira o nome da coleção"
          onChange={(e) => setName(e.target.value)}
          value={name}
          error={errors.name}
        />

        <Input
          label="Descrição"
          placeholder="Descreva os detalhes da coleção"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          error={errors.description}
        />

        <Input
          label="Imagem"
          placeholder="Escolha uma imagem para a coleção (link)"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          error={errors.image}
        />

        <Button label={buttonLabel} onClick={() => handleSubmit()} />
      </Container>
    </>
  );
};

export default CreateOrUpdateCollection;
