import React from 'react'

const Entry = ({ id, name, pos, text, date, dispatch, darkMode, alertDispatch }) => {
  
  const highlightPost = e => {
    e.target.parentElement.parentElement.style = `background-color: ${darkMode ? '#222' : '#eee'}`
  }

  const undoHighlightPost = e => {
    e.target.parentElement.parentElement.style = 'background-color: inherit'
  }

  const dispatchDelete = () => {
    dispatch({ type: 'delete-entry', payload: { id: id } })
    alertDispatch({ type: 'delete-entry' })
  }

  return (
    <div className="entry">
      <h4 id="name">{name}</h4>
      <p id="pos">{pos}</p>
      <p id="text">{text}</p>
      <section className="mod">
        <i className="fas fa-edit" title="Edit" onClick={() => dispatch({ type: 'edit-entry', payload: { id: id } })} onMouseOver={highlightPost} onMouseLeave={undoHighlightPost}></i>
        <i className="fas fa-times" title="Delete" onClick={dispatchDelete} onMouseOver={highlightPost} onMouseLeave={undoHighlightPost}></i>
      </section>
      <p id="date">{date}</p>
    </div>
  )
}

export default Entry
