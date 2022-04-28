import React, { ReactChild } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

interface Props {
  children: ReactChild;
}

const PrivateRoute = ({ children }: Props) => {
  const { currentUser } = useAuth();
  return <>{currentUser ? children : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
