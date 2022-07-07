import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Corona from './components/Corona';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Population from './components/Population';
import Weather from './components/Weather';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/corona" element={<Corona />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/population" element={<Population />} />
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
