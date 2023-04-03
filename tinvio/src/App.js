import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Company from './components/Company/Company';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import RedRec from '../src/assets/app-1920/RedRectangle.png';
import PinkRec from '../src/assets/app-1920/PinkRectangle.png';

function App() {

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/company" element={<Company/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
