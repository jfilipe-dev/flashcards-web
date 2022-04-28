import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${(props) => props.theme.palette.background};
  margin-top: 10rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary};
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.theme.palette.text};
  margin-top: 8px;
  text-align: center;
`;
