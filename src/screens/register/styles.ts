import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 720px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.palette.primary};
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1.4rem;
  color: ${(props) => props.theme.palette.text};
  margin-top: 8px;
  text-align: center;
  margin-bottom: 4rem;
`;
