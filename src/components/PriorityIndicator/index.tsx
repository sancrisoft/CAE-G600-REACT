import { FC } from 'react'
import Text from '../Text'
import styles from './PriorityIndicator.module.scss'

export interface PriorityProps {
  noInfo?: boolean
}

const PriorityIndicator: FC<PriorityProps> = ({ noInfo = false }) => {
  return (
    <div className={styles.ParentContainer}>
      <div className={styles.Container}>
        <Text text="AT-1:" />
        <Text text={noInfo ? 'XXXXX' : 'PRIORITY'} />
      </div>
      <div className={styles.Container}>
        <Text text="AT-2:" />
        <Text text={noInfo ? 'XXXXXXD' : 'NOT PRIORITY'} />
      </div>
    </div>
  )
}

export default PriorityIndicator
