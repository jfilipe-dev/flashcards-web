import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValiationErros from '../../utils/getValiationErros';
import { Container, Title } from './styles';
import { useAuth } from '../../context/useAuth';

interface Errors {
  email?: string;
  password?: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'A senha deve ter ao menos 8 caracteres')
    .required('A senha é obrigatória'),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit() {
    setErrors({});

    const data = {
      email,
      password,
    };

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      await login(email, password);
      navigate('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorsValidate = getValiationErros(error);
        setErrors(errorsValidate);
      } else {
        setErrors({
          password:
            'Senha inválida. Por favor, verifique se o endereço de e-mail e/ou a senha são válidos.',
        });
      }
    }
  }

  return (
    <Container>
      <Title>Login</Title>

      <Input
        label="E-mail"
        placeholder="insira o seu e-mail"
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />

      <Input
        label="Senha"
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        type="password"
      />

      <Button label="Entrar" onClick={() => handleSubmit()} />
    </Container>
  );
};

export default Register;
