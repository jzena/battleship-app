import Board from './board.js'
import Ship from './ship.js'

const SHIPS = {
  TYPE: {
    AIRCRAFT_CARRIES: 'AC',
    SUB_MARINE1: 'SM1',
    BATTLESHIP1: 'B1',
    BATTLESHIP2: 'B2',
    PATROL_BOAT1: 'PB1',
    PATROL_BOAT2: 'PB2',
    PATROL_BOAT3: 'PB3',
    SINGLE_BOAT1: 'SB1',
    SINGLE_BOAT2: 'SB2',
    SINGLE_BOAT3: 'SB3',
    SINGLE_BOAT4: 'SB4',
    EMPTY: '~',
  },
  DIRECTION: {
    VERTICAL: 0,
    HORIZONTAL: 1,
  },
}

class Player {
  constructor(name) {
    this.name = name
    this.board = new Board(this.name)
    this.ships = this.createShips()
    this.placeShipsRandomLy()
  }

  createShips() {
    return {
      // [SHIPS.TYPE.AIRCRAFT_CARRIES]: Ship.aircraftCarrier(),
      [SHIPS.TYPE.SUB_MARINE1]: Ship.submarine(SHIPS.TYPE.SUB_MARINE1),
      [SHIPS.TYPE.BATTLESHIP1]: Ship.battleship(SHIPS.TYPE.BATTLESHIP1),
      [SHIPS.TYPE.BATTLESHIP2]: Ship.battleship(SHIPS.TYPE.BATTLESHIP2),
      [SHIPS.TYPE.PATROL_BOAT1]: Ship.patrolBoat(SHIPS.TYPE.PATROL_BOAT1),
      [SHIPS.TYPE.PATROL_BOAT2]: Ship.patrolBoat(SHIPS.TYPE.PATROL_BOAT2),
      [SHIPS.TYPE.PATROL_BOAT3]: Ship.patrolBoat(SHIPS.TYPE.PATROL_BOAT3),
      [SHIPS.TYPE.SINGLE_BOAT1]: Ship.singleBoat(SHIPS.TYPE.SINGLE_BOAT1),
      [SHIPS.TYPE.SINGLE_BOAT2]: Ship.singleBoat(SHIPS.TYPE.SINGLE_BOAT2),
      [SHIPS.TYPE.SINGLE_BOAT3]: Ship.singleBoat(SHIPS.TYPE.SINGLE_BOAT3),
      [SHIPS.TYPE.SINGLE_BOAT4]: Ship.singleBoat(SHIPS.TYPE.SINGLE_BOAT4),
    }
  }

  withinLimits(x, y, shipType) {
    const {direction, length} = this.ships[shipType]
    if (direction === SHIPS.DIRECTION.VERTICAL) {
      return x + length <= this.board.size
    } else {
      return y + length <= this.board.size
    }
  }

  isValidPlace(x, y, shipType) {
    const {direction, length} = this.ships[shipType]
    const invalidPlace = Object.keys(this.ships)
    if (this.withinLimits(x, y, shipType)) {
      for (let i = 0; i < length; i++) {
        if (direction === SHIPS.DIRECTION.VERTICAL) {
          if (invalidPlace.includes(this.board.cells[x + i][y])) {
            return false
          }
        } else if (invalidPlace.includes(this.board.cells[x][y + i])) {
          return false
        }
      }
      return true
    }

    return false
  }

  placeShipItem(x, y, shipType) {
    const {direction, length, name} = this.ships[shipType]
    for (var i = 0; i < length; i++) {
      if (direction === SHIPS.DIRECTION.VERTICAL) {
        const newX = x + i
        this.board.cells[newX][y] = name
        this.ships[shipType].coordindates[`${newX}-${y}`] = false
      } else {
        const newY = y + i
        this.board.cells[x][newY] = name
        this.ships[shipType].coordindates[`${x}-${newY}`] = false
      }
    }
  }
  placeShipsRandomLy() {
    for (const shipType in this.ships) {
      let invalidPlacement = true
      while (invalidPlacement) {
        var randomX = Math.floor(this.board.size * Math.random())
        var randomY = Math.floor(this.board.size * Math.random())
        if (this.isValidPlace(randomX, randomY, shipType)) {
          this.placeShipItem(randomX, randomY, shipType)
          invalidPlacement = false
        } else {
          continue
        }
      }
    }
  }

  lost() {
    const bool = Object.keys(this.ships).every(ship => {
      return this.ships[ship].sunk()
    })
    return bool
  }
}

export default Player
