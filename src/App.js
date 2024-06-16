import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Resources from './components/Resources';
import About from './components/About';
import SitePlan from './components/SitePlan';
import './App.css';
import './styles/index-styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/siteplan" element={<SitePlan />} />
      </Routes>
    </div>
  );
}

export default App;
