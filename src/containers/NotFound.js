/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './NotFound.module.css'

import {useHistory} from 'react-router-dom'

function NotFoundScreen() {
  let history = useHistory()
  const login = () => {
    history.push('/')
  }
  return (
    <div className={classes.NotFound}>
      <div>
        Sorry... nothing here.
        <a onClick={login}>Go Home</a>
      </div>
    </div>
  )
}

export {NotFoundScreen}
