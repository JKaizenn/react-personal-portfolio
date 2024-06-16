import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from './components/home';
import Resources from './components/resources';
import About from './components/about';
import SitePlan from "./components/site-plan";
import Footer from "./components/footer"; // Import the Footer component
import './App.css';
import './styles/index-styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
        <Route path="siteplan" element={<SitePlan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
