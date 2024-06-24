// src/main.jsx
//disable esllint
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; // <-- Import Tailwind CSS here
import SignUp from './Home'; // Corrected import path
import LandingPage from './LandingPage';
import Calculator from './Calculator';
import Memes from './Memes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calc" element={<Calculator />} /> {/* Calculator route */}
        <Route path="/signup" element={<SignUp />} /> {/* SignUp route */}
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
