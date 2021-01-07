import React, { useReducer, useState, useEffect } from 'react'
import EditForm from './EditForm'
import RecoForm from './RecoForm'
import RecoList from './RecoList'

const RecoContainer = ({ darkMode }) => {

  // for use in main form
  const [name, setName] = useState('')
  const [pos, setPos] = useState('')
  const [text, setText] = useState('')

  // for use in edit form
  const [name$, setName$] = useState('')
  const [pos$, setPos$] = useState('')
  const [text$, setText$] = useState('')

  const [enableEdit, setEnableEdit] = useState(false)
  const [id, setId] = useState(null)

  const reducer = (entries, action) => {
    switch (action.type) {
      case 'add-entry':
        return [...entries, newEntry(action.payload.name, action.payload.pos, action.payload.text, action.payload.date)]
      case 'delete-entry':
        return entries.filter(entry => entry.id !== action.payload.id)
      case 'edit-entry':
        let toEdit = (entries.filter(entry => entry.id === action.payload.id))[0]
        setId(toEdit.id)
        setName$(toEdit.name)
        setPos$(toEdit.pos)
        setText$(toEdit.text)
        setEnableEdit(true)
        return entries
      default:
        return entries
    }
  }

  const newEntry = (name, pos, text, date) => {
    return { id: Date.now(), name: name, pos: pos, text: text, date: date }
  }

  const [entries, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    if (enableEdit === true) {
      document.querySelector('#edit-name').focus()
    }
  }, [enableEdit])

  return (
    <div className="container" id="recommendations">
      <h3>Recommendations</h3>
      <RecoForm dispatch={dispatch} 
      name={name} setName={setName}
      pos={pos} setPos={setPos} 
      text={text} setText={setText}
      enableEdit={enableEdit} />

      <RecoList entries={entries} dispatch={dispatch} darkMode={darkMode} />

      <EditForm dispatch={dispatch}
      name$={name$} setName$={setName$}
      pos$={pos$} setPos$={setPos$}
      text$={text$} setText$={setText$}
      enableEdit={enableEdit} setEnableEdit={setEnableEdit}
      id={id} />
    </div>
  )
}

export default RecoContainer
