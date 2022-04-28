import React from 'react';

import { Container, Label } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  green?: boolean;
}

const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
