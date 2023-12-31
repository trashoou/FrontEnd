import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Заменили Switch на Routes
import App from './App';
import UserDetails from './components/User/UserDetails';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* Другие маршруты (routes) здесь, если есть */}
      <Route
        path="/user/:userId"
        element={<UserDetails />} // Убрали лишние props
      />

      <Route path="/" element={<App />} /> {/* Исправили Component на element */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
