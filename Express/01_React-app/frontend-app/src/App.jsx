import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MainContent from './components/MainContent';
import LoginForm from './components/LoginForm';
import FaqPage from './components/FaqPage'
import RegistrationPage from './components/RegistrationPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} exact />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          {/*
          <Route path="/contact-us" element={<ContactUs />} />*/}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;