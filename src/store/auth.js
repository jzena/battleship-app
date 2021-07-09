import {createSlice} from '@reduxjs/toolkit'

const localStorageKey = '__auth_provider_token__'
const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      window.localStorage.setItem(localStorageKey, true)
      state.isAuthenticated = true
    },
    logout(state) {
      window.localStorage.removeItem(localStorageKey)
      state.isAuthenticated = false
    },
  },
})

export function getToken() {
  return window.localStorage.getItem(localStorageKey)
}

export const authActions = authSlice.actions

export default authSlice.reducer
