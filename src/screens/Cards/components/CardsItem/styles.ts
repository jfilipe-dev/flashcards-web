import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-bottom: 1.5px solid ${(props) => props.theme.palette.background};
`;

export const Label = styled.h2`
  color: #333;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 24px;
`;
