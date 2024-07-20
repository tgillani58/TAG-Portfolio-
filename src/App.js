import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Experiance from './components/pages/Experiance';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/experiance" element={<Experiance />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
