import styles from './DynamicTable.module.scss'

interface DynamicTableProps {
  data?: IItems[]
  mainHeaders?: IHeader[]
  secondaryHeaders?: IHeader[]
  mainHeadersTwo?: IHeader[]
  secondaryHeadersTwo?: IHeader[]
  hasBorder?: boolean
  colspan?: number
  hasMarginTop?: boolean
  thirdHeaders?: IHeader[]
  isHalfWidth?: boolean
  customContainer?: boolean
  customWidth?: boolean
  hasHeightHeader?: boolean
}

interface IItems {
  parameter: string
  statuses: (string | boolean)[]
  noData?: boolean
  alignRight?: boolean
  alignCenter?: boolean
  customSpan?: number
  type?: string[]
  hasBorderBottom?: boolean
}

interface IHeader {
  title: string
  alignLeft?: boolean
  customSpan?: number
  hasBorderBottom?: boolean
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  mainHeaders,
  secondaryHeaders,
  mainHeadersTwo,
  secondaryHeadersTwo,
  colspan = 1,
  hasMarginTop = false,
  thirdHeaders = [],
  isHalfWidth = false,
  customContainer = false,
  hasHeightHeader = true,
}) => {
  const tableClassNames = hasMarginTop ? `${styles.Table} ${styles.MarginTop}` : styles.Table
  const containerClassName = isHalfWidth
    ? `${styles.Container} ${styles.halfWidth}`
    : customContainer
    ? styles.CustomContainer
    : styles.Container

    const headers = mainHeaders
    ? mainHeaders.map((header, index) => {
        const rowSpan = index === 0 && thirdHeaders.length > 0 ? 3 : index === 0 ? 2 : 1;
        const colSpan = header.customSpan ? header.customSpan : index === 0 ? 1 : 2;
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : '';
        const whiteTextClass = (header.title !== 'IOGM1' && header.title !== 'IOGM4') ? styles.whiteText : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : '';
        const widthStyle = header.title === 'INTERNAL TEMPERATURE' ? { width: '200px' } : {}; // Use inline style or a class as needed
        const headerContent = header.title === 'INTERNAL TEMPERATURE'
        ? <>INTERNAL<br />TEMPERATURE</> // Adding a line break
        : header.title;

        return (
          <th key={index} rowSpan={rowSpan} colSpan={colSpan} className={`${classAlignLeft} ${ClassHasBorder} ${whiteTextClass}`} style={widthStyle}>
            {headerContent}
          </th>
        );
      })
    : null;

  const secHeaders = secondaryHeaders
    ? secondaryHeaders.map((header, index) => {
        const colSpan = header.customSpan ? header.customSpan : colspan
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : ''
        const whiteTextClass = (header.title !== 'IOGM1' && header.title !== 'IOGM4') ? styles.whiteText : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : ''
        return (
          <th colSpan={colSpan} key={index + 1} className={`${classAlignLeft} ${ClassHasBorder} ${whiteTextClass}`}>
            {header.title}
          </th>
        )
      })
    : null

    const headersTwo = mainHeadersTwo
    ? mainHeadersTwo.map((header, index) => {
        const rowSpan = index === 0 && thirdHeaders.length > 0 ? 3 : index === 0 ? 2 : 1;
        const colSpan = header.customSpan ? header.customSpan : index === 0 ? 1 : 2;
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : '';
        const whiteTextClass = (header.title !== 'IOGM1' && header.title !== 'IOGM4') ? styles.whiteText : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : '';
        const widthStyle = header.title === 'INTERNAL TEMPERATURE' ? { width: '200px' } : {}; // Use inline style or a class as needed
        const headerContent = header.title === 'INTERNAL TEMPERATURE'
        ? <>INTERNAL<br />TEMPERATURE</> // Adding a line break
        : header.title;

        return (
          <th key={index} rowSpan={rowSpan} colSpan={colSpan} className={`${classAlignLeft} ${ClassHasBorder} ${whiteTextClass}`} style={widthStyle}>
            {headerContent}
          </th>
        );
      })
    : null;

  const secHeadersTwo = secondaryHeadersTwo
    ? secondaryHeadersTwo.map((header, index) => {
        const colSpan = header.customSpan ? header.customSpan : colspan
        const classAlignLeft = header.alignLeft ? styles.AlignLeft : ''
        const whiteTextClass = (header.title !== 'IOGM1' && header.title !== 'IOGM4') ? styles.whiteText : '';
        const ClassHasBorder = header.hasBorderBottom || header.hasBorderBottom === undefined ? styles.HeaderBorder : ''
        return (
          <th colSpan={colSpan} key={index + 1} className={`${classAlignLeft} ${ClassHasBorder} ${whiteTextClass}`}>
            {header.title}
          </th>
        )
      })
    : null

  return (
    <div className={containerClassName}>
      <table className={tableClassNames}>
        <thead className={hasHeightHeader ? '' : styles.TableHeadClass}>
          <tr>{headers}</tr>
          <tr>{secHeaders}</tr>
        </thead>
        <thead className={hasHeightHeader ? '' : styles.TableHeadClass}>
          <tr>{headersTwo}</tr>
          <tr>{secHeadersTwo}</tr>
        </thead>
      </table>
    </div>
  )
}

export default DynamicTable