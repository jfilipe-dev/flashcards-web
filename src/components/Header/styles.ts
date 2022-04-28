import styled from 'styled-components';

interface MenuItemProps {
  bold?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background: ${(props) => props.theme.palette.second};
`;

export const Logo = styled.img`
  width: 180px;
`;

export const HomeButton = styled.button`
  background: transparent;
  border: none;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.p<MenuItemProps>`
  font-size: 1.5rem;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: ${(props) => props.theme.palette.text};
  margin-left: 32px;
`;

export const LogoutButton = styled.button`
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.text};
  margin-left: 32px;
  background: transparent;
  border: none;
`;
