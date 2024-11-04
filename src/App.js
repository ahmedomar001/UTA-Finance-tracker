import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscountsPage from './pages/DiscountsPage';
import ScholarshipPage from './pages/ScholarshipPage';
import NavBar from './components/NavBar';
import MyComponent from './components/MyComponent';  

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discounts" element={<DiscountsPage />} />
        <Route path="/scholarships" element={<ScholarshipPage />} />
        <Route path="/mycomponent" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
