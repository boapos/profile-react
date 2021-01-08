import React from 'react'
import blrds from '../images/blrds.png'
import elec from '../images/elec.png'
import doom from '../images/doom.png'

const Hobbies = () => {
  return (
    <div id="hobbies" className="container">
      <h3>Hobbies</h3>
      <ul className="hobby-pics">
          <li><img src={blrds} alt={'billiards'} /></li>
          <li><img src={elec} alt={'electronics'} /></li>
          <li><img src={doom} alt={'doom'} /></li>
      </ul>
      <ul className="hobby-list">
        <li>Badminton</li>
        <li>Billiards</li>
        <li>Biking</li>
        <li>Video games: MOBA, DOOM, racing sims</li>
        <li>Electronics</li>
        <li>Audio gears and stuff</li>
        <li>Bass</li>
        <li>Hydroponics</li>
        <li></li>
      </ul>
    </div>
  )
}

export default Hobbies
