import React from 'react';

import { Container, Error, Label, TextInput, Info } from './styles';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  info?: string;
}

const Textarea = ({ label, error, info, ...rest }: InputProps) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextInput {...rest} />
      {error && <Error>{error}</Error>}
      {info && !error && <Info>{info}</Info>}
    </Container>
  );
};

export default Textarea;
