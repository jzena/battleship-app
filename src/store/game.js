import {createSlice} from '@reduxjs/toolkit'

const levels = {
  '': 'Level',
  0: 'Easy',
  100: 'Medium',
  50: 'Hard',
}
const initialGameState = {
  ships: {},
  cells: [],
  attemps: 0,
  lost: false,
  win: false,
  levels,
  totalShips: 0,
  shipsSunk: undefined,
  hitStatus: undefined,
  records: [],
  finished: false,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    startGame(state, action) {
      const {ships, cells, totalShips} = action.payload
      state.ships = JSON.parse(ships)
      state.cells = cells
      state.totalShips = totalShips
      state.hitStatus = undefined
      state.win = false
      state.lost = false
      state.finished = false
    },
    updateGame(state, action) {
      const {x, y, shipType, SHIP_STATUS} = action.payload
      const ship = state.ships[shipType]
      const cells = state.cells
      let shipsSunk = state.shipsSunk || 0
      const coordinate = `${x}-${y}`

      if (ship && coordinate in ship.coordindates) {
        ship.numHits += 1
        ship.coordindates[coordinate] = true
        cells[x][y] = SHIP_STATUS.HIT

        // if ship is sunk
        if (ship.numHits === ship.length) {
          Object.keys(ship.coordindates).forEach(coor => {
            const shipx = coor.split('-')[0]
            const shipy = coor.split('-')[1]

            cells[shipx][shipy] = SHIP_STATUS.SUNK
          })
          shipsSunk += 1
        }
      } else {
        cells[x][y] = SHIP_STATUS.FAIL
      }

      state.cells = cells
      state.ships[shipType] = ship
      state.shipsSunk = shipsSunk
      state.hitStatus = cells[x][y]
    },
    finishGame(state, action) {
      state.records.push({
        id: state.records.length + 1,
        level: `${levels[state.attemps]} - ${state.attemps}`,
        hits: action.payload.hits,
        completed: true,
      })
      state.win = action.payload.win
      state.finished = true
    },
    resetGame(state, action) {
      state.ships = {}
      state.cells = []
      state.shipsSunk = undefined
      state.hitStatus = undefined
      state.finished = false
    },
    updateAttempts(state, action) {
      state.attemps = Number(action.payload)
    },
  },
})

export const gameActions = gameSlice.actions

export default gameSlice.reducer
