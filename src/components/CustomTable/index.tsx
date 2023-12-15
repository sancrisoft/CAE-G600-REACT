import styles from './CustomTable.module.scss'

interface DynamicTableProps {
  data: IItems[]
  headers?: IHeader[]
  customStyle?: boolean
}
interface IItems {
  row1: string
  row2: string
}

interface IHeader {
  title: string
}

const CustomTable: React.FC<DynamicTableProps> = ({ headers, data, customStyle= false }) => {
  const containerClass = customStyle ? styles.CustomTable: styles.Table
  return (
    <div className={styles.Container}>
      <table className={containerClass}>
        { headers ? 
            <thead>
              <tr>
              {headers.map((header, index) => (
                <th key={index} className={styles.Header}>
                  {header.title}
                 </th>
              ))}
               </tr>
            </thead>
        :
        null
        }
        <tbody>
          {data.map((row, rowIndex) => (
            <>
              <tr key={rowIndex} className={styles.row}>
                <td className={`${styles.Cell1} ${customStyle ? styles.CustomMargin : ''}`} colSpan={2}>
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
