import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// COMPONENTS
import NavBar from './components/navBar/navBar.js';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
// PAGES
import Landing from './pages/landing/landing.js';
import About from './pages/about/about.js';
import Career from './pages/career/career.js';
import ContactUs from './pages/contactUs/contactUs.js';
import CookiesPolicy from './pages/cookiesPolicy/cookiesPolicy.js';
import GetAnApp from './pages/getAnApp/getAnApp.js';
import PrivacyPolicy from './pages/privacyPolicy/privacyPolicy.js';
import Services from './pages/services/services.js';
import TermsConditions from './pages/termsConditions/termsConditions.js';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Career" element={<Career />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/CookiesPolicy" element={<CookiesPolicy />} />
          <Route exact path="/GetAnApp" element={<GetAnApp />} />
          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/TermsConditions" element={<TermsConditions />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
