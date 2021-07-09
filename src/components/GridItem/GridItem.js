import PropTypes from 'prop-types'
import React from 'react'
import {SHIP_STATUS} from './../../utils/constants'
import classes from './GridItem.module.css'

const propTypes = {
  rowIndex: PropTypes.number.isRequired,
  colIndex: PropTypes.number.isRequired,
  onHandleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

export const abcArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const GridItem = props => {
  const {rowIndex, colIndex, value, onHandleClick} = props
  const handleHit = () => {
    onHandleClick(rowIndex, colIndex, value)
  }

  return (
    <>
      <div
        onClick={handleHit}
        className={`${classes.boardItem} ${classes[value]}`}
      >
        <span>
          {abcArray[rowIndex]}-{colIndex}
        </span>
        <div className={classes.boardValue}>
          {(value === SHIP_STATUS.FAIL || value === SHIP_STATUS.HIT) && 'X'}
        </div>
      </div>
    </>
  )
}

GridItem.propTypes = propTypes
export default React.memo(GridItem)
