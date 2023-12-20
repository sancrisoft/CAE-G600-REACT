import styles from './TableList.module.scss';

interface TableListProps {
  data: Item[];
  columns?: string[];
  marginTop?: 's' | 'm' | 'l';
  halfWidth?: boolean;
}

interface Item {
  columns: string[];
}

const TableList: React.FC<TableListProps> = ({ data, columns, marginTop, halfWidth = false }) => {
  const containerClass = halfWidth ? styles.TableContainer : '';
  const classMarginTop = marginTop === 's' ? styles.MarginTopS : marginTop === 'm' ? styles.MarginTopM : marginTop === 'l' ? styles.MarginTopL : '';
  return (
    <div className={containerClass}>
      <table className={`${styles.Table} ${classMarginTop}`}>
        <tbody>
          {columns && (
            <tr className={styles.Header}>
              {columns.map((column, index) => {
                return <td key={`header${index}`}>{column}</td>;
              })}
            </tr>
          )}
          {data.map((item, index) => {
            return (
              <tr key={index}>
                {item.columns.map((childItem, index) => (
                  <td key={`child_${index}`}>{childItem}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
