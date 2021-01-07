import React from 'react'

const DarkMode = ({ setDarkMode }) => {
  const toggleDarkMode = e => {
    if (e.target.checked) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }

  return (
    <div className="theme-switch-wrapper">
        <em id="dm">Dark Mode!</em>
        <label className="theme-switch" htmlFor="checkbox">
            <input onChange={toggleDarkMode} type="checkbox" id="checkbox" />
            <div className="slider round"></div>
        </label>
    </div>
  )
}

export default DarkMode
