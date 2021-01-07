import React, { useState, useEffect } from 'react'

const EditForm = ({ dispatch, name$, setName$, pos$, setPos$, text$, setText$, enableEdit, setEnableEdit, id, alertDispatch }) => {

  const [isValid, setIsValid] = useState(true)

  const submitHandler = e => {
    e.preventDefault()
    if (name$ === '' || pos$ === '' || text$ === '') {
      setIsValid(false)
    } else {
      const date = '(Edited) ' + new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
      dispatch({ type: 'delete-entry', payload: { id: id } })
      dispatch({ type: 'add-entry', payload: { name: name$, pos: pos$, text: text$, date: date } })
      alertDispatch({ type: 'save-edit' })
      setEnableEdit(false)
      setIsValid(true)
    }
  }

  const closeHandler = () => { 
    setEnableEdit(false)
    setIsValid(true)
  }

  const escHandler = e => {
    if (e.key === 'Escape') {
      setEnableEdit(false)
      setIsValid(true)
    }
  }

  useEffect(() => {
    if (enableEdit === true) {
      document.addEventListener('keydown', escHandler)
    }
    return () => {
      document.removeEventListener('keydown', escHandler)
    }
  // eslint-disable-next-line
  }, [enableEdit])

  return (
    <div className={enableEdit ? 'edit-form disp' : 'edit-form'}>
      <div className="form-main">
        <div className="form-div">
          <form className="form" onSubmit={submitHandler}>
          <p className={isValid ? 'hide-alert' : 'show-alert'}>Please fill-in all fields.</p>
            <i className="close fas fa-times" onClick={closeHandler}></i>
            <div className="name">
              <input id="edit-name" type="text" className="feedback-input" placeholder="Name" value={name$} onChange={e => setName$(e.target.value)} />
            </div>
            <div className="position">
              <input type="text" className="feedback-input" placeholder="Position" value={pos$} onChange={e => setPos$(e.target.value)} />
            </div>
            <div className="text">
              <textarea className="feedback-input" placeholder="Add a recommendation" value={text$} onChange={e => setText$(e.target.value)} ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Save" className="post-btn" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditForm
