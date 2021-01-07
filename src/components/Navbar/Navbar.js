import React, { useState, useEffect } from 'react'
import MenuItems from './MenuItems'

const Navbar = () => {
  
  const [top, setTop] = useState(true)
  const [clickedMenu, setClickedMenu] = useState(false)

  const scrollTop = () => {
    let scrolled = document.scrollingElement.scrollTop
    if (scrolled > 100) {
      setTop(false)
    } else {
      setTop(true)
    }
  }

  const scrollCloseMenu = () => {
    let scrolled = document.scrollingElement.scrollTop
    if (scrolled > 0) {
      setClickedMenu(false)
    }
  }
  
  const linkClicked = e => {
    if (e.target.tagName === 'A') {
      setClickedMenu(false)
    }
  }

  const clickCloseMenu = () => {
    setClickedMenu(false)
  }

  useEffect(() => {
    document.addEventListener('click', clickCloseMenu)
    document.addEventListener('scroll', scrollTop)
    document.addEventListener('scroll', scrollCloseMenu)
    document.querySelector('.navbar-items').addEventListener('click', linkClicked)
    return () => {
      document.removeEventListener('click', clickCloseMenu)
      document.removeEventListener('scroll', scrollTop)
      document.removeEventListener('scroll', scrollCloseMenu)
      document.querySelector('.navbar-items').removeEventListener('click', linkClicked)
    }
  }, [])

  useEffect(() => {  
    if(clickedMenu === true) {
      document.querySelector('nav').classList.add('active-menu')
    } else {
      document.querySelector('nav').classList.remove('active-menu')
    }
  }, [clickedMenu])

  return (
    <nav className={top ? 'scrolled-top navbar-items' : 'navbar-items'} onClick={e => e.stopPropagation()}>
      <h1 className="navbar-logo"><a href="#home">Bruce Apos</a></h1>
      <div className="menu-icon" onClick={() => setClickedMenu(!clickedMenu)}>
        <i className={clickedMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clickedMenu ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}><a href={item.url} className={item.cName}>{item.title}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
