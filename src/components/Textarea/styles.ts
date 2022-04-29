import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0.8rem 0;
`;

export const Label = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
`;

export const TextInput = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 0.4rem;
  padding: 0.6rem;
  border: none;
  resize: none;
`;

export const Error = styled.p`
  font-size: 1rem;
  margin-top: 0.4rem;
  color: ${(props) => props.theme.palette.error};
`;

export const Info = styled.p`
  font-size: 1rem;
  margin-top: 0.4rem;
  color: ${(props) => props.theme.palette.gray};
`;
