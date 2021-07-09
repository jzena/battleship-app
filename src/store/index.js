import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'

import authReducer from './auth'
import gameReducer from './game'

const store = configureStore({
  reducer: {
    game: gameReducer,
    auth: authReducer,
  },
  middleware: [logger],
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
