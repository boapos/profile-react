import React, { useReducer, useState, useEffect } from 'react'
import Alert from './Alert'
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

  const [temp, setTemp] = useState([])

  const initialAlert = {
    type: '',
    message: ''
  }

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
      case 'retrieve-localStorage':
        return temp
      default:
        return entries
    }
  }

  const newEntry = (name, pos, text, date) => {
    return { id: Date.now(), name: name, pos: pos, text: text, date: date }
  }

  const alertReducer = (alert, action) => {
    switch (action.type) {
      case 'new-entry':
        return { type: 'new', message: 'Recommendation posted.' }
      case 'delete-entry':
        return { type: 'del', message: 'Recommendation deleted.' }
      case 'save-edit':
        return { type: 'save', message: 'Changes saved.' }
      case 'invalid-input':
        return { type: 'invalid', message: 'Please fill-in all fields.' }
      default:
        return alert
    }
  }

  const [entries, dispatch] = useReducer(reducer, [])
  const [alert, alertDispatch] = useReducer(alertReducer, initialAlert)

  useEffect(() => {
    if (enableEdit === true) {
      document.querySelector('#edit-name').focus()
    }
  }, [enableEdit])

  useEffect(() => {
    let timer
    if (alert.type === '') {
      document.querySelector('.alert-container').style = 'visibility: hidden'
    } else {
      document.querySelector('.alert-container').style = 'visibility: visible'
      timer = setTimeout(() => document.querySelector('.alert-container').style = 'visibility: hidden; transition: visibility 0s linear 300ms, opacity 0.2s; opacity: 0', 2500)
    }
    return () => clearTimeout(timer);
  }, [alert])

  useEffect(() => { // retrieve from local storage
    if (localStorage.getItem('entries') === null) {
      console.log('true')
      localStorage.setItem('entries', JSON.stringify([]))
    } else {
      setTemp(JSON.parse(localStorage.getItem('entries')))
      dispatch({ type:'retrieve-localStorage' })
    }
  }, [])

  useEffect(() => { // save to local storage
    localStorage.setItem('entries', JSON.stringify(entries))
  }, [entries])

  return (
    <div id="recommendations" className="container" id="recommendations">
      <h3>Recommendations</h3>
      <Alert alert={alert} />

      <RecoForm dispatch={dispatch} 
      name={name} setName={setName}
      pos={pos} setPos={setPos} 
      text={text} setText={setText}
      enableEdit={enableEdit}
      alertDispatch={alertDispatch} />

      <RecoList entries={entries}
      dispatch={dispatch} 
      darkMode={darkMode} 
      alertDispatch={alertDispatch} />

      <EditForm dispatch={dispatch}
      name$={name$} setName$={setName$}
      pos$={pos$} setPos$={setPos$}
      text$={text$} setText$={setText$}
      enableEdit={enableEdit} setEnableEdit={setEnableEdit}
      id={id}
      alertDispatch={alertDispatch} />
    </div>
  )
}

export default RecoContainer
