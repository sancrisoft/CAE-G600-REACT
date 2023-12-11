import styles from './StatusTable.module.scss'

interface StatusTableProps {
  data: IItems[]
  tableHeader?: IHeader[]
  hasDobleTitle?: boolean
  hasHeader?: boolean
  title1?: string
  title2?: string
  isHalfWidth?: boolean
  supHeader?: string
  reducedHeaderTitle?: boolean
  noMargin?: boolean
}

interface IItems {
  parameter: string
  statuses?: (string | boolean)[]
  status1?: boolean | string
  status2?: boolean | string
  hasBorderBottom?: boolean
  color?: string
  colspan?: number
  rowTitlePadding?: boolean
  noData?: boolean,
  noDataStatus1?: boolean
  noDataStatus2?: boolean
}

interface IHeader {
  title: string
}

const StatusTable: React.FC<StatusTableProps> = ({
  data,
  tableHeader,
  hasDobleTitle = false,
  hasHeader = true,
  title1 = 'DIRECT',
  title2 = 'RDC12',
  isHalfWidth = false,
  supHeader,
  noMargin = false,
  reducedHeaderTitle
}) => {
  const containerClassName = isHalfWidth ? `${styles.Container} ${styles.halfWidth}` : noMargin ? styles.ContainerNoMargin : styles.Container
  function getStatusClass(status: any) {
    return status !== undefined ? (status ? styles.Green : styles.Red) : ''
  }
  return (
    <div className={containerClassName}>
      <table className={`${styles.Table} ${noMargin ? styles.TableNoMargin : ''}`}>
        <thead>
          {supHeader && (
            <tr>
              <th colSpan={100}>{supHeader}</th>
            </tr>
          )}
          {hasDobleTitle && tableHeader && (
            <>
              <tr className={reducedHeaderTitle ? styles.reducedHeaderTitle : styles.Header}>
                <th rowSpan={2}>{tableHeader[0].title}</th>
                <th className={`${styles.HeaderTitle} ${styles.Title1}`}>{title1}</th>
                {title2 ? <th className={`${styles.HeaderTitle} ${styles.Title2}`}>{title2}</th> : null}
              </tr>
              <tr className={styles.SubHeader}>
                <th>
                  <p className={styles.DoubleHeader}>{tableHeader[1].title}</p>
                </th>
                {tableHeader[2].title ? (
                  <th>
                    <p className={styles.DoubleHeader}>{tableHeader[2].title}</p>
                  </th>
                ) : null}
              </tr>
            </>
          )}
          <tr className={reducedHeaderTitle ? styles.reducedHeaderTitle : styles.Header}>
            {hasHeader && !hasDobleTitle && tableHeader?.map((header, index) => <th key={index}>{header.title}</th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            const rowClass = `${item.hasBorderBottom || item.hasBorderBottom === undefined ? styles.Border : ''} ${
              item.rowTitlePadding ? styles.RowTitlePadding : ''
            }`

            if (item.statuses) {
              return (
                <tr key={index} className={rowClass}>
                  <td className={styles.Parameter}>{item.parameter}</td>
                  {item.statuses.map((status, index) => {
                    return (
                      <td key={index}>
                        {typeof status === 'boolean' ? (
                          <div
                            className={`${styles.Square} ${getStatusClass(status)} ${item.noData ? styles.NoData : ''}`}
                          ></div>
                        ) : (
                          <p className={styles.AlignCenter}>{status}</p>
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            } else {
              const fan1Status = getStatusClass(item.status1)
              const fan2Status = getStatusClass(item.status2)
              const hasStatus2 = item.status2 === undefined
              const colorStatus = item.color === 'blue' ? styles.StatusColor : ''
              const colspan = item.colspan === 2 ? 2 : 1
              const rowClass = `${item.hasBorderBottom || item.hasBorderBottom === undefined ? styles.Border : ''} ${
                item.rowTitlePadding ? styles.RowTitlePadding : ''
              }`
              return (
                <tr key={index} className={rowClass}>
                  <td className={styles.Parameter}>{item.parameter}</td>
                  <td colSpan={colspan}>
                  {typeof item.status1 === 'boolean' ? (
                    <div className={`${fan1Status} ${(item.noData || item.noDataStatus1) ? styles.NoData : ''} ${styles.Square}`}></div>
                  ) : (
                    <p className={`${styles.AlignCenter} ${colorStatus}`}>{item.status1}</p>
                  )}
                  </td>

                  {hasStatus2 ? null : typeof item.status2 === 'boolean' ? (
                    <td>
                      <div className={`${fan2Status} ${(item.noData || item.noDataStatus2) ? styles.NoData : ''} ${styles.Square}`}></div>
                    </td>
                  ) : (
                    <td>
                      <p className={`${styles.AlignCenter} ${colorStatus}`}>{item.status2}</p>
                    </td>
                  )}
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default StatusTable
