import React from 'react'
import styles from './Table.module.scss'

interface TableProps {
  data: Array<{ [key: string]: string }>
  tableRef?: React.RefObject<HTMLTableElement>
}

const Table: React.FC<TableProps> = ({ data, tableRef }) => {
  return (
    <div className={styles.Container} ref={tableRef}>
      <table className={styles.Table}>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
