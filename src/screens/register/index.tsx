import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValiationErros from '../../utils/getValiationErros';
import { Container, Title, Subtitle } from './styles';
import { useAuth } from '../../context/useAuth';

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter ao menos 8 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senha não confere')
    .required('Confirmação da senha é obrigatório'),
});

const Register: React.FC = () => {
  const navigate = useNavigate();

  const { signup } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit() {
    setErrors({});

    const data = {
      name,
      email,
      password,
      confirmPassword,
    };

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      await signup(email, password);

      navigate('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorsValidate = getValiationErros(error);
        setErrors(errorsValidate);
      }
    }
  }

  return (
    <Container>
      <Title>Cadastre-se</Title>
      <Subtitle>
        Com a sua conta, você poderá gerenciar suas coleções de flash cards
      </Subtitle>

      <Input
        label="Nome"
        placeholder="Insira o seu nome completo"
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
      />

      <Input
        label="E-mail"
        placeholder="insira o seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Input
        label="Senha"
        info="Use ao menos 8 caracteres contendo letras, números e ao menos um caracter especial"
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        type="password"
      />

      <Input
        label="Repetir a senha"
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={errors.confirmPassword}
        type="password"
      />

      <Button label="Cadastrar" onClick={() => handleSubmit()} />
    </Container>
  );
};

export default Register;
