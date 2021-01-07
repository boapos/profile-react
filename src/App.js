import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection'
import DarkMode from './components/DarkMode'
import RecoContainer from './components/Recommendations/RecoContainer'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experiences from './components/Experiences'
import Hobbies from './components/Hobbies'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar />
      <DarkMode setDarkMode={setDarkMode} />
      <HeroSection />
      <AboutMe />
      <hr/>
      <Education />
      <hr/>
      <Experiences />
      <hr/>
      <Hobbies />
      <hr/>
      <RecoContainer darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default App
