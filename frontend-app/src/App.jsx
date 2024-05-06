import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import MainContent from './components/MainContent';
import LoginForm from './components/LoginForm';
import ContactUsPage from './components/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} exact />
          {/*<Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />*/}
          <Route path="/login" element={<LoginForm />} />
          <Route path="Contact-us" element={<Contact-us />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;