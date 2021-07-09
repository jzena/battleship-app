import {useSelector} from 'react-redux'
import './Table.css'
const renderTableData = records => {
  return records.map((item, index) => {
    const {id, level, hits, completed} = item //destructuring
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{level}</td>
        <td>{hits}</td>
        <td>{completed ? 'si' : 'no'}</td>
      </tr>
    )
  })
}

const renderTableHeader = records => {
  let header = records.length > 0 ? Object.keys(records[0]) : []
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  })
}

const Table = () => {
  const {records} = useSelector(state => state.game)
  return (
    <div>
      <h1 id="title">Records</h1>
      <table id="students">
        <tbody>
          <tr>{renderTableHeader(records)}</tr>
          {renderTableData(records)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
