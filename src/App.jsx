import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./page/HomePage";
import PricingPage from "./page/PricingPage";
import AboutPage from "./page/AboutPage";
import ContactPage from "./page/ContactPage"; 
import PrivacyPolicy from "./page/PrivacyPolicy";
import TermsConditions from "./page/TermsConditions";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
     <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
