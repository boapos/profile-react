import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer container">
      <p>Find me on:</p>
        <ul className="socmed">
            <li><a href="https://www.facebook.com/bobapos/"><i className="fab fa-facebook-square"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/bruce-oliver-apos-51b3381b3/"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/boapos"><i className="fab fa-github"></i></a></li>
        </ul>
      <p>{'\u00A9'} 2020 Bruce Apos</p> 
    </footer>
  )
}

export default Footer
