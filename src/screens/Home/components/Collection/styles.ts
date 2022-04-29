import styled from 'styled-components';

export const Container = styled.div`
  padding: 56px 32px;
  background-color: #fff;
  border-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 20px 40px;
`;

export const Content = styled.div`
  cursor: pointer;
`;

export const Image = styled.img`
  height: 240px;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  color: ${(props) => props.theme.palette.highlight};
  text-align: center;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  bottom: 12px;
  right: 12px;
`;
