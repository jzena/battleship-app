import './App.css'
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { authActions, getToken } from './store/auth'

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
}

const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))

function App() {
  const dispatch = useDispatch()
  const token = getToken()
  if (token) {
    dispatch(authActions.login())
  }
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <React.Suspense fallback={ <div>loading...</div> }>
      <div className="App">
        <Provider template={ AlertTemplate } { ...options }>
          { isAuth ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
        </Provider>
      </div>
    </React.Suspense>
  )
}

export default App
