import styled from 'styled-components';

interface SideProps {
  showBack?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-radius: 1.4rem;
  border: 1px solid ${(props) => props.theme.palette.text};
  background-color: #fff;
`;

export const Front = styled.div<SideProps>`
  padding: 20px;
  width: 100%;
  height: ${(props) => (props.showBack ? '150px' : '300px')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Back = styled.div`
  padding: 20px;
  border-top: 1px solid #ccc;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.p`
  color: #222;
  font-size: 1.4rem;
  font-weight: bold;
  font-size: 2rem;
`;
