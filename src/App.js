import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection'
import DarkMode from './components/DarkMode'
import RecoContainer from './components/Recommendations/RecoContainer'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar />
      <DarkMode setDarkMode={setDarkMode} />
      <HeroSection />
      <RecoContainer darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default App
