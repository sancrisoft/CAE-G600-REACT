import { FC } from 'react'
import styles from './Legend.module.scss'

export interface LegendProps {
  firstIsRed?: boolean
  title?: string
  title2?: string
  hasMarginTop?: boolean
}

const Legend: FC<LegendProps> = ({ firstIsRed, title, title2, hasMarginTop = false }) => {
  const colorSecond = firstIsRed ? styles.Green : styles.Red
  const colorFirst = firstIsRed ? styles.Red : styles.Green
  const containerClass = hasMarginTop ? `${styles.Container} ${styles.ContainerTop}` : styles.Container
  return (
    <div className={containerClass}>
      <span className={styles.Indicator}>
        <p>{title ? title : 'Inactive'} =</p>
        <div className={`${styles.Square} ${colorFirst}`}></div>
      </span>
      <span className={styles.Indicator}>
        <p>{title2 ? title2 : 'Active'} =</p>
        <div className={`${styles.Square} ${colorSecond}`}></div>
      </span>
      <span className={styles.Indicator}>
        <p>No data =</p>
        <div className={`${styles.Square} ${styles.Green} ${styles.NoData}`}></div>
        <p className={styles.Separator}>/</p>
        <div className={`${styles.Square} ${styles.Red} ${styles.NoData}`}></div>
      </span>
    </div>
  )
}

export default Legend
