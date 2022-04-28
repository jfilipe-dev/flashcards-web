import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Container,
  Logo,
  Menu,
  MenuItem,
  LogoutButton,
  HomeButton,
} from './styles';
import LogoIcon from '../../assets/logo.png';
import { useAuth } from '../../context/useAuth';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser, logout } = useAuth();

  useEffect(() => {
    if ((currentUser && pathname === '/login') || pathname === '/register') {
      navigate('/home');
    }
  }, [currentUser, navigate, pathname]);

  return (
    <Container>
      <HomeButton onClick={() => navigate('/')}>
        <Logo src={LogoIcon} />
      </HomeButton>
      <Menu>
        {currentUser ? (
          <>
            <Link to="/home">
              <MenuItem bold={pathname === '/home'}>Minhas coleções</MenuItem>
            </Link>

            <LogoutButton type="button" onClick={logout}>
              Sair
            </LogoutButton>
          </>
        ) : (
          <>
            {(pathname === '/login' || pathname === '/') && (
              <Link to="/register">
                <MenuItem bold={pathname === '/login'}>Cadastre-se</MenuItem>
              </Link>
            )}

            {(pathname === '/register' || pathname === '/') && (
              <Link to="/login">
                <MenuItem bold={pathname === '/register'}>Entrar</MenuItem>
              </Link>
            )}
          </>
        )}
      </Menu>
    </Container>
  );
};

export default Header;
