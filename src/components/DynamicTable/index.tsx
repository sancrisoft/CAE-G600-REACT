import styles from './DynamicTable.module.scss';

interface DynamicTableProps {
  data: IItems[];
  mainHeaders?: IHeader[];
  secondaryHeaders?: IHeader[];
  hasBorder?: boolean;
  colspan?: number;
  hasMarginTop?: boolean;
  thirdHeaders?: IHeader[];
  isHalfWidth?: boolean;
  customContainer?: boolean;
  customWidth?: boolean;
  hasHeightHeader?: boolean;
  hasInsideBorder?: Boolean;
}

interface IItems {
  parameter: string;
  statuses: (string | boolean)[];
  noData?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
  customSpan?: number;
  type?: string[];
  hasBorderBottom?: boolean;
  repeatStatus?: number;
}

interface IHeader {
  title: string;
  alignLeft?: boolean;
  customSpan?: number;
  hasBorderBottom?: boolean;
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  data,
  mainHeaders,
  secondaryHeaders,
  colspan = 1,
  hasMarginTop = false,
  thirdHeaders = [],
  isHalfWidth = false,
  customContainer = false,
  customWidth = false,
  hasHeightHeader = true,
  hasInsideBorder = true,
}) => {
  const tableClassNames = hasMarginTop ? `${styles.Table} ${styles.MarginTop}` : styles.Table;
  const containerClassName = isHalfWidth ? `${styles.Container} ${styles.halfWidth}` : customContainer ? styles.CustomContainer : styles.Container;

  function getStatusClass(status: any) {
    return status !== undefined ? (status ? styles.Green : styles.Red) : '';
  }

  function getypeClass(type: any) {
    return type === 'noData' ? styles.NoData : '';
  }

  const headers = mainHeaders
    ? mainHeaders.map((header, index) => {
        const rowSpan = index === 0 && thirdHeaders.length > 0 ? 3 : index === 0 ? 2 : 1;
        const colSpan = header.customSpan ? header.customSpan : index === 0 ? 1 : 2;
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : '';

        return (
          <th key={index} rowSpan={rowSpan} colSpan={colSpan} className={`${classAlignLeft} ${ClassHasBorder}`}>
            {header.title}
          </th>
        );
      })
    : null;

  const secHeaders = secondaryHeaders
    ? secondaryHeaders.map((header, index) => {
        const colSpan = header.customSpan ? header.customSpan : colspan;
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : '';
        return (
          <th colSpan={colSpan} key={index + 1} className={`${classAlignLeft} ${ClassHasBorder}`}>
            {header.title}
          </th>
        );
      })
    : null;

  const thirdHeadersRow = thirdHeaders
    ? thirdHeaders.map((header, index) => {
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : '';
        const colSpan = header.customSpan ? header.customSpan : 2;
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : '';

        return (
          <th colSpan={colSpan} key={index + 1} className={`${classAlignLeft} ${ClassHasBorder}`}>
            {header.title}
          </th>
        );
      })
    : null;

  const rows = data.map((item, index) => {
    const customcolspan = item.customSpan ? item.customSpan : colspan;
    const customClassName = item.customSpan === 4 ? styles.CustomClass : '';
    const rowClass = `${(item.hasBorderBottom || item.hasBorderBottom === undefined) && item.customSpan !== 4 ? styles.Border : ''} `;
    return (
      <tr key={index} className={`${customClassName} ${rowClass}`}>
        <td>{item.parameter}</td>
        {item.statuses &&
          item.statuses.map((status, index) => (
            <td colSpan={customcolspan} key={index} className={!customWidth ? styles.CustomWidth : ''}>
              {typeof status === 'boolean' ? (
                <div className={styles.StatusContainer}>
                  {Array.from({ length: item.repeatStatus ?? 1 }, (_, repIndex) => (
                    <div key={repIndex} className={`${styles.Square} ${getStatusClass(status)} ${item.type ? getypeClass(item.type[index]) : ''} ${item.noData ? styles.NoData : ''}`}></div>
                  ))}
                </div>
              ) : (
                <p className={`${item.alignRight ? styles.AlignRight : item.alignCenter ? styles.AlignCenter : styles.AlignLeft} `}>{status}</p>
              )}
            </td>
          ))}
      </tr>
    );
  });

  return (
    <div className={containerClassName}>
      <table className={`${tableClassNames} ${hasInsideBorder ? '' : styles.ConditionalFlagClass}`}>
        <thead className={hasHeightHeader ? '' : styles.TableHeadClass}>
          <tr>{headers}</tr>
          {thirdHeadersRow && thirdHeadersRow.length > 0 && <tr>{thirdHeadersRow}</tr>}
          <tr>{secHeaders}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
