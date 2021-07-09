class Board {
  constructor(name) {
    this.name = name
    this.size = 10
    this.init()
  }

  init() {
    this.cells = this.createGrid(this.size, this.size)
    this.setDefaultBoard()
  }
  createGrid(length) {
    let arr = new Array(length || 0)
    let i = length
    if (arguments.length > 1) {
      let args = Array.prototype.slice.call(arguments, 1)
      while (i--) arr[length - 1 - i] = this.createGrid.apply(this, args)
    }
    return arr
  }

  setDefaultBoard() {
    this.cells.forEach(row => {
      row.fill('~')
    })
  }
}

export default Board
