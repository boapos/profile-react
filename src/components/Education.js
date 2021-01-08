import React from 'react'
import UPLB from '../images/uplb.png'
import PSHS from '../images/pshs.png'
import LSA from '../images/LSA.jpg'

const Education = () => {
  return (
    <div id="education" className="container">
      <h3>Education</h3>
      <ul className="schools">
          <li><img src={UPLB} alt={'UPLB'} /><h4>UP Los Baños</h4><p>Tertiary</p></li>
          <li><img src={PSHS} alt={'PSHS'} /><h4>PSHS-CMC</h4><p>Secondary</p></li>
          <li><img id="lsa" src={LSA} alt={'LSA'} /><h4>La Salle Academy</h4><p>Primary</p></li>
      </ul>
    </div>
  )
}

export default Education
