import styles from './TwoColumnsTable.module.scss'

interface TwoColumnsTableProps {
  data: IItems[]
  tableHeader: IHeader[]
  rowLeft?: boolean
  separation?: boolean
}

interface IItems {
  fan: string
  description: string
}

interface IHeader {
  title: string
}

const TwoColumnsTable: React.FC<TwoColumnsTableProps> = ({ data, tableHeader, rowLeft = true, separation }) => {
  const rowClassname = rowLeft ? styles.RowDescriptionLeft : styles.RowDescriptionRight

  const renderTable = (header: string) => {
    const rows = data.map((item, index) => (
      <tr key={index}>
        <td className={styles.RowFan}>{item.fan}</td>
        <td className={`${rowClassname}`}>{item.description}</td>
      </tr>
    ))

    return (
      <table className={styles.Table}>
        <thead>
          <tr>
            <th className={separation ? styles.Border : ''}>{header}</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }

  return (
    <div className={styles.Container}>
      {tableHeader.map((header, index) => (
        <div key={index}>{renderTable(header.title)}</div>
      ))}
    </div>
  )
}

export default TwoColumnsTable
