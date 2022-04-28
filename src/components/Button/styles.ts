import styled from 'styled-components';

export const Container = styled.button<{ green?: boolean }>`
  padding: 20px 28px;
  border: none;
  margin-top: 24px;
  border-radius: 0.4rem;
  background: ${({ theme, green }) =>
    green ? theme.palette.green : theme.palette.primary};
`;

export const Label = styled.span`
  font-weight: bold;
  color: ${(props) => props.theme.palette.text};
`;
