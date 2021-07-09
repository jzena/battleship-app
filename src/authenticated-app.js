import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorMessage, FullPageErrorFallback} from './components/lib'
import Game from './containers/Game'
import Records from './containers/Records'
import Settings from './containers/Settings'
import {NotFoundScreen} from './containers/NotFound'
import Header from './components/Header/Header'

function ErrorFallback({error}) {
  return <ErrorMessage error={error} className="ErrorFallback" />
}

function AuthenticatedApp() {
  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AppRoutes />
      </ErrorBoundary>
    </ErrorBoundary>
  )
}
const repo = `/${window.location.pathname.split('/')[1]}`;
function AppRoutes() {
  return (
    <Router basename={repo}>
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" render={() => <Game />} />
            <Route exact path="/settings" render={() => <Settings />} />
            <Route exact path="/records" render={() => <Records />} />
            <Route path="*" render={() => <NotFoundScreen />} />
          </Switch>
        </main>
      </>
    </Router>
  )
}

export default AuthenticatedApp
