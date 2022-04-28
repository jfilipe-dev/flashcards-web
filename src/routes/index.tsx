import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Header from '../components/Header';
import Main from '../screens/main';
import Register from '../screens/register';
import Login from '../screens/login';
import Home from '../screens/Home';
import CreateOrUpdateCollection from '../screens/CreateOrUpdateCollection';
import Cards from '../screens/Cards';
import CreateOrUpdateCard from '../screens/CreateOrUpdateCard';
import Play from '../screens/Play';

import PrivateRoute from './private';

export default function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
        }}
      >
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/create-or-update-collection"
            element={
              <PrivateRoute>
                <CreateOrUpdateCollection />
              </PrivateRoute>
            }
          />

          <Route
            path="/cards"
            element={
              <PrivateRoute>
                <Cards />
              </PrivateRoute>
            }
          />

          <Route
            path="/create-or-update-card"
            element={
              <PrivateRoute>
                <CreateOrUpdateCard />
              </PrivateRoute>
            }
          />

          <Route
            path="/play-cards"
            element={
              <PrivateRoute>
                <Play />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
