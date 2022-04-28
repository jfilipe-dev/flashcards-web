import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, MenuItem, LogoutButton } from './styles';
import LogoIcon from '../../assets/logo.png';
import { useAuth } from '../../context/useAuth';

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Container>
      <Logo src={LogoIcon} />
      <Menu>
        {currentUser ? (
          <>
            <Link to="/home">
              <MenuItem>Minhas coleções</MenuItem>
            </Link>

            <LogoutButton type="button" onClick={logout}>
              Sair
            </LogoutButton>
          </>
        ) : (
          <>
            <Link to="/register">
              <MenuItem>Cadastre-se</MenuItem>
            </Link>

            <Link to="/login">
              <MenuItem>Entrar</MenuItem>
            </Link>
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Header;
