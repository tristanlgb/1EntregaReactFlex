import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import NavigationBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  </Router>
);

export default App;
