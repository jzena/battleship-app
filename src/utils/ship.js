class Ship {
  constructor(length, name) {
    const randomDirection = Math.floor(2 * Math.random())
    this.length = length
    this.name = name
    this.numHits = 0
    this.direction = randomDirection
    this.coordindates = {}
  }

  static aircraftCarrier(name) {
    return new Ship(5, name)
  }
  static submarine(name) {
    return new Ship(4, name)
  }
  static battleship(name) {
    return new Ship(3, name)
  }
  static patrolBoat(name) {
    return new Ship(2, name)
  }
  static singleBoat(name) {
    return new Ship(1, name)
  }

  hit() {
    this.numHits += 1
    if (this.sunk()) {
      console.log(`You sunk your opponent's ${this.name}!`)
    }
  }

  sunk() {
    return this.numHits === this.length
  }
}

export default Ship
