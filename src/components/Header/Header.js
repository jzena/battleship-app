/* eslint-disable jsx-a11y/anchor-is-valid */
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import classes from './Header.module.css'
import {authActions} from '../../store/auth'

const Header = () => {
  const dispatch = useDispatch()
  let history = useHistory()
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authActions.logout())
    history.push('/')
  }
  const onSettings = () => {
    history.push('/settings')
  }
  const onRecords = () => {
    history.push('/records')
  }
  const onGame = () => {
    history.push('/')
  }

  return (
    <header className={classes.header}>
      <h1>BattleShip</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a id="menuSettings" onClick={onSettings}>
                Settings
              </a>
            </li>
            <li>
              <a id="menuRecords" onClick={onRecords}>
                Records
              </a>
            </li>
            <li>
              <a id="menuGame" onClick={onGame}>
                Game
              </a>
            </li>
            <li>
              <button id="btnLogout" onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
