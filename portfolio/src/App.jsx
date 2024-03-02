import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Project from './components/Project'
import ProjectGallery from './components/ProjectGallery'

function App() {
  return (
    <>
       <Router>
       <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="/" element={<Home />} />
        <Route path="project" element={<Project />} />
        <Route path="projectGallery" element={<ProjectGallery />} />
        {/* Define a route that will have descendant routes */}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
