import React from 'react'
import Entry from './Entry'

const RecoList = ({ entries, dispatch, darkMode, alertDispatch }) => {
  return (
    <div className="reco-list">
      <ul>
        {entries.map(entry => (
          <Entry key={entry.id} id={entry.id} name={entry.name} pos={entry.pos} text={entry.text} date={entry.date} dispatch={dispatch} darkMode={darkMode} alertDispatch={alertDispatch} />
        ))}
      </ul>
    </div>
  )
}

export default RecoList
