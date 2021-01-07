import React from 'react'

const RecoForm = ({ dispatch, name, setName, pos, setPos, text, setText, enableEdit, alertDispatch }) => {

const submitHandler = e => {
  e.preventDefault()
  if (name === '' || pos === '' || text === '') {
    alertDispatch({ type: 'invalid-input' })
  } else {
    const date = new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'})
    dispatch({ type: 'add-entry', payload: { name: name, pos: pos, text: text, date: date } })
    alertDispatch({ type: 'new-entry' })
    setName('')
    setPos('')
    setText('')
  }
}

  return (
    <div className="form-main">
      <div className="form-div">
        <form className="form" onSubmit={submitHandler}>
          <div className="name">
            <input type="text" className="feedback-input" placeholder="Name" value={enableEdit ? '' : name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="position">
            <input type="text" className="feedback-input" placeholder="Position" value={enableEdit ? '' : pos} onChange={e => setPos(e.target.value)} />
          </div>
          <div className="text">
            <textarea className="feedback-input" placeholder="Add a recommendation" value={enableEdit ? '' : text} onChange={e => setText(e.target.value)} ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Post" className="post-btn" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default RecoForm
