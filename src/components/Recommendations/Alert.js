import React from 'react'

const Alert = ({ alert }) => {
  return (
    <div className="alert-container">
      <div className="alert">
        <p>{alert.message}</p>
      </div>
    </div>
    
  )
}

export default Alert
