import { FC } from 'react'
import styles from './FlightDetail.module.scss'

export interface FlightDetailProps {
  left: string
  right: string
}

const FlightDetail: FC<FlightDetailProps> = ({ left, right }) => {
  return (
    <div className={styles.Container}>
      <span className={styles.Data}>{left}</span>
      <span className={styles.Data}>{right}</span>
    </div>
  )
}

export default FlightDetail
