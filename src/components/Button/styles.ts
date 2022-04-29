import styled from 'styled-components';

interface ContainerProps {
  green?: boolean;
  error?: boolean;
}

export const Container = styled.button<ContainerProps>`
  padding: 20px 28px;
  border: none;
  margin-top: 24px;
  border-radius: 0.4rem;
  background: ${({ theme, green, error }) =>
    green
      ? theme.palette.green
      : error
      ? theme.palette.error
      : theme.palette.primary};
`;

export const Label = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text};
`;
