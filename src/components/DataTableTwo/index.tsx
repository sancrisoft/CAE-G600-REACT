import styles from './DataTable.module.scss'

interface DataTableProps {
  data: IItems[]
  mainHeaders: IHeader[]
  secondaryHeaders?: string[]
  mergedHeader?: string
  hasBorder?: boolean
  leftAlign?: boolean
  headerLeftAlign?: boolean
  rightAlign?: boolean
  marginTop?: boolean,
  reducedHeaderStatus1?: boolean
}

interface IItems {
  parameter: string
  status1: string
  status2?: string
  status3?: string
  status4?: string
}

interface IHeader {
  title: string
}

const DataTable: React.FC<DataTableProps> = ({
  data,
  mainHeaders,
  secondaryHeaders,
  mergedHeader,
  reducedHeaderStatus1 = false,
  hasBorder = false,
  leftAlign = false,
  rightAlign,
  headerLeftAlign,
  marginTop,
}) => {
  const headerClass = mergedHeader ? '' : styles.Header
  const headerAlign = headerLeftAlign ? styles.LeftAlign : ''
  const rowClass = mergedHeader ? styles.TablesRows : reducedHeaderStatus1 ? styles.Rows2 : styles.Rows
  const rowAlign = leftAlign ? styles.LeftAlign : rightAlign ? styles.RightAlign : ''

  const headers = mainHeaders.map((header, index) => {
    let rowSpan = 1
    if (secondaryHeaders) rowSpan = index === 0 ? 2 : 1

    return (
      <th key={index} rowSpan={rowSpan} className={`${headerClass} ${headerAlign}`}>
        <p className={mergedHeader && index === 0 ? styles.VerticalCenter : ''}>{header.title}</p>
      </th>
    )
  })

  const secHeaders = secondaryHeaders
    ? secondaryHeaders.map((header, index) => {
        return (
          <th key={index + 1} className={styles.Header}>
            {header}
          </th>
        )
      })
    : null

  const rows = data.map((item, index) => (
    <tr key={index} className={`${rowClass} ${rowAlign}`}>
      <td>{item.parameter}</td>
      <td>{item.status1}</td>
      {item.status2 && <td>{item.status2}</td>}
      {item.status3 && <td>{item.status3}</td>}
      {item.status4 && <td>{item.status4}</td>}
    </tr>
  ))

  const containerMargin = marginTop ? styles.MarginTop : ''

  return (
    <div className={`${styles.Container} ${containerMargin}`}>
      <table className={styles.Table}>
        <thead>
          {secondaryHeaders ? (
            <>
              <tr className={styles.subHeader}>{headers}</tr>
              <tr className={styles.SecHeaders}>{secHeaders}</tr>
            </>
          ) : mergedHeader ? (
            <>
              <tr className={hasBorder ? styles.MergedHeadersBorder : (reducedHeaderStatus1 ? styles.MergedHeaders2 : styles.MergedHeaders)}>
                <th></th>
                <th colSpan={2}>
                  <p className={styles.MergedHeader}>{mergedHeader}</p>
                </th>
              </tr>
              <tr className={hasBorder ? styles.MergedHeadersBorder : (reducedHeaderStatus1 ? styles.MergedHeaders2 : styles.MergedHeaders)}>{headers}</tr>
            </>
          ) : (
            <tr className={(reducedHeaderStatus1 ? styles.MergedHeaders2 : styles.MergedHeaders)}>{headers}</tr>
          )}
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

export default DataTable
