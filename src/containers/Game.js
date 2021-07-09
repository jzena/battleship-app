import {useEffect, useState, useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {gameActions} from '../store/game'
import {useAlert} from 'react-alert'
import Player from './../utils/player'
import GridItem from './../components/GridItem/GridItem'
import {SHIP_STATUS} from './../utils/constants'

import classes from './Game.module.css'

const Game = () => {
  const {
    cells,
    win,
    attemps: TotalAttemps,
    hitStatus,
    shipsSunk,
    totalShips,
    finished,
    lost,
  } = useSelector(state => state.game)
  const dispatch = useDispatch()
  let history = useHistory()
  const [attemps, setAttemps] = useState(0)
  const alert = useAlert()

  useEffect(() => {
    const player = new Player('jzena')
    const nroShips = Object.keys(player.ships).length
    dispatch(
      gameActions.startGame({
        ships: JSON.stringify(player.ships),
        cells: player.board.cells,
        totalShips: nroShips,
      }),
    )
  }, [dispatch])

  useEffect(() => {
    if (totalShips === shipsSunk && TotalAttemps > 0) {
      dispatch(
        gameActions.finishGame({
          hits: attemps,
          win: true,
        }),
      )
    }
  }, [dispatch, totalShips, shipsSunk, attemps, TotalAttemps])

  useEffect(() => {
    if (hitStatus === SHIP_STATUS.FAIL) {
      alert.error('you failed the shot!!')
    }
    if (hitStatus === SHIP_STATUS.HIT) {
      alert.show('you hit the ship!!')
    }
    if (hitStatus === SHIP_STATUS.SUNK) {
      alert.success('ship destroyed!!')
    }
  }, [hitStatus, alert, attemps])

  const handleReset = () => {
    setAttemps(0)
    dispatch(gameActions.resetGame())
    const player = new Player('jzena')
    const nroShips = Object.keys(player.ships).length
    dispatch(
      gameActions.startGame({
        ships: JSON.stringify(player.ships),
        cells: player.board.cells,
        totalShips: nroShips,
      }),
    )
  }

  const handleFinish = () => {
    dispatch(
      gameActions.finishGame({
        hits: attemps,
        win: false,
        lost: false,
      }),
    )
    history.push('/settings')
  }

  const handleClick = useCallback(
    (x, y, shipType) => {
      const currentAttempt = attemps + 1
      if (currentAttempt === TotalAttemps && TotalAttemps > 0) {
        dispatch(
          gameActions.finishGame({
            hits: currentAttempt,
            win: false,
            lost: true,
          }),
        )
        console.log('you lose the game..')
        return
      }

      dispatch(
        gameActions.updateGame({
          x,
          y,
          shipType,
          SHIP_STATUS,
        }),
      )
      setAttemps(currentAttempt)
    },
    [attemps, dispatch, TotalAttemps],
  )

  if (finished) {
    return (
      <div>
        <div>The game has finished</div>
        {win && <div>Congrats you win!!</div>}
        {lost && (
          <div>you lose! do you want to re-try? pls click on Reset button</div>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    )
  }

  return (
    <div data-testid="gamePage" className={classes.gamePage}>
      <div className={classes.gameActions}>
        <button id="btnReset" onClick={handleReset}>
          Reset Game
        </button>
        <button id="btnFinish" onClick={handleFinish}>
          Finish Game
        </button>
      </div>
      <div>
        <h1>BattleShip</h1>
        {TotalAttemps > 0 && (
          <div>
            Attemp: {attemps} of {TotalAttemps}
          </div>
        )}
        <div data-testid="board" className={classes.boardContainer}>
          {cells?.map((row, rowIndex) =>
            row.map((col, colIndex) => (
              <GridItem
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                value={col}
                onHandleClick={handleClick}
              />
            )),
          )}
        </div>
      </div>
    </div>
  )
}

export default Game
