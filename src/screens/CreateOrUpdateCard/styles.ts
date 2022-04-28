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

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.palette.text};
  margin-top: 40px;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 380px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 1.4rem;
  border: 1px solid ${(props) => props.theme.palette.text};
  background-color: #fff;
`;

export const Front = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

export const Back = styled.div`
  padding: 20px;
`;

export const Label = styled.p`
  color: #999;
  margin-bottom: 20px;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 150px;
  text-align: center;
  border: none;
  font-size: 2rem;
  color: #000;
  text-decoration: ${(props) => (props.value ? 'underline' : 'none')};
  font-weight: ${(props) => (props.value ? 'bold' : 'normal')};
  text-size-adjust: 100%;
`;
