import React from 'react'

import Header from './components/Header/Header'
import Settings from './containers/Settings'

function UnauthenticatedApp() {

  return (
    <>
      <Header />
      <div className="UnauthenticatedApp">
        <h1>Battleship</h1>
        <div className="UnauthenticatedAppBody">
          <Settings unautenticated={true} />
        </div>
      </div>
    </>
  )
}

export default UnauthenticatedApp
