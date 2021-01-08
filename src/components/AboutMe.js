import React from 'react'
import dp from '../images/dp.jpg'

const AboutMe = () => {
  return (
    <div id="about" className="container">
      <h3>About Me</h3>
      <img id="dp" src={dp} alt={'Bruce-pic'} />
      <p>I'm a fresh grad from UPLB with a degree in BSEE with Computer Eng'g as my major. I'm a Software Engineer Trainee at White Cloak. I enjoy tinkering on computers and electronics.</p>
    </div>
  )
}

export default AboutMe
