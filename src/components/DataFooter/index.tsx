import { FC } from 'react'
import styles from './DataFooter.module.scss'

export interface DataFooterProps {
  left: string
  right: string[]
  screen?: boolean,
  notLeft?: boolean
}

const DataFooter: FC<DataFooterProps> = ({ left, right, screen, notLeft }) => {
  const rightElements = (
    <span className={styles.Text}>
      {right[0]} <br /> {right[1]}
    </span>
  )
  return (
    <div className={styles.Container}>
      <span className={styles.Text}>
        {
          notLeft ? '' : (screen ? 'SCREEN SCR #' : 'SCR # ') + left
        }
        
      </span>
      {right.length > 1 ? rightElements : <span className={styles.Text}>{right[0]}</span>}
    </div>
  )
}

export default DataFooter
