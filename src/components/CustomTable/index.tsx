import styles from './CustomTable.module.scss'

interface DynamicTableProps {
  data: IItems[]
  headers: IHeader[]
}
interface IItems {
  row1: string
  row2: string
}

interface IHeader {
  title: string
}

const CustomTable: React.FC<DynamicTableProps> = ({ headers, data }) => {
  return (
    <div className={styles.Container}>
      <table className={styles.Table}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className={styles.Header}>
                {header.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <>
              <tr key={rowIndex} className={styles.row}>
                <td className={styles.Cell1} colSpan={2}>
                  {row.row1}
                </td>
              </tr>
              <tr>
                <td className={styles.Cell2} colSpan={2}>
                  {row.row2}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable
