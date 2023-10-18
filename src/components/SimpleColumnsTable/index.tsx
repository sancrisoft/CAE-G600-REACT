import styles from './SimpleColumnsTable.module.scss'

interface SimpleColumnsTableProps {
  data: IItems[]
  subheaders: string[]
  header: string
}

interface IItems {
  statuses: string[]
}

const SimpleColumnsTable: React.FC<SimpleColumnsTableProps> = ({ data, subheaders, header }) => {
  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th className={styles.Header} colSpan={subheaders.length}>
            {header}
          </th>
        </tr>
        <tr>
          {subheaders.map((header, index) => (
            <th key={index} className={styles.Header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              {item.statuses.map((status, index) => {
                return (
                  <td className={styles.Status} key={index}>
                    {status}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SimpleColumnsTable
