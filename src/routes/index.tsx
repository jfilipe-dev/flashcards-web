import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Cards from '../screens/Cards';
import CreateOrUpdateCard from '../screens/CreateOrUpdateCard';
import CreateOrUpdateCollection from '../screens/CreateOrUpdateCollection';
import Home from '../screens/Home';
import Login from '../screens/login';
import Main from '../screens/main';
import Play from '../screens/Play';
import Register from '../screens/register';
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
