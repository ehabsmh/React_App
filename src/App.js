import React from "react";
import Landing_Page from "./Components/Landing_Page/Landing_Page.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="home" element={<Landing_Page />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
