import "./App.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurfacePage from "./pages/SurfacePage";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import HelpPage from "./pages/HelpPage";
import YouCanBe from "./pages/YouCanBe";
import FeaturePage from "./pages/FeaturePage";
import TermsPolicy from "./pages/TermsPolicy";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/featurePage" element={<FeaturePage />} />
        <Route path="/helpCenter" element={<HelpPage />} />
        <Route path="/pricing" element={<Features />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/termsPolicy" element={<TermsPolicy />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/youcanbe" element={<YouCanBe />} />

        <Route path="/surface" element={<SurfacePage />} />
        {/* <Route path="/youcanbeSharer" element={<YouCanBe />} /> */}
        {/* <Route path="/youcanbeSupplier" element={<YouCanBe />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
