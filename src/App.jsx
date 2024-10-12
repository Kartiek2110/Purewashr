import React from 'react';
import Main from './Components/Home/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Price from './Components/Pricing/Price';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;