import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.palette.text};
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const InputIcon = styled.div`
  padding: 12px;
  background-color: #ccc;
`;

export const ListCards = styled.div`
  margin: 40px 0;
`;
