import React from "react";
import Advertising from "./components/Advertising";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MediaKit from "./components/MediaKit";
import Overview from "./components/Overview";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <MediaKit />
      <Overview />
      <Advertising />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
