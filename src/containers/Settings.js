import React, {useState} from 'react'
import {useAlert} from 'react-alert'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {gameActions} from './../store/game'
import {authActions} from './../store/auth'

function Settings({unautenticated}) {
  const [numberOfAttempts, setNumberOfAttempts] = useState()
  let history = useHistory()
  const dispatch = useDispatch()

  const alert = useAlert()
  const onChangeLevel = event => {
    setNumberOfAttempts(event.target.value)
  }
  function handleSubmit(event) {
    if (!numberOfAttempts) {
      alert.error('You must select a level')
      return
    }
    event.preventDefault()
    dispatch(authActions.login())
    dispatch(gameActions.updateAttempts(numberOfAttempts))
    if (!unautenticated) {
      history.push('/')
    }
  }

  return (
    <div className="FormMain">
      <div className="FormGroup">
        <label data-testid="settingsTitle">Settings Game</label>
      </div>
      <div className="FormGroup">
        <label htmlFor="ddlLevel">Level</label>
        <select id="ddlLevel" onChange={onChangeLevel}>
          <option value="">Level</option>
          <option value="0">Easy</option>
          <option value="100">Medium</option>
          <option value="50">Hard</option>
        </select>
      </div>

      <div>
        <button onClick={handleSubmit}>Start</button>
      </div>
    </div>
  )
}

export default Settings
