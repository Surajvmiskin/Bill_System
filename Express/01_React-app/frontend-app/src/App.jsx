import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MainContent from './components/MainContent';
import LoginForm from './components/LoginForm';
import FaqPage from './components/FaqPage'
import RegistrationPage from './components/RegistrationPage'
import PaymentGateway from './components/payment-gateway';
import AdminLogin from './components/AdminLogin';
import Admin from './components/Admin';
import ContactUsPage from './components/Contact-us';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} exact />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path='/payment-gateway' element={<PaymentGateway />} />
          <Route path="/Admin-login" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;