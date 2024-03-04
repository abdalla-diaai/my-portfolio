import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import ProjectGallery from "./components/pages/ProjectGallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="projectGallery" element={<ProjectGallery />} />
          <Route path="resume" element={<Resume />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
