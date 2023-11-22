import { FC } from 'react'
import styles from './DataHeader.module.scss'

export interface DataHeaderProps {
  left: string
  right: string
  isTitleLeft?: boolean
  success?: boolean
}

const DataHeader: FC<DataHeaderProps> = ({ left, right, isTitleLeft = false, success }) => {
  const titleClassname = isTitleLeft ? styles.ContainerLeft : styles.Container
  return (
    <div className={`${titleClassname}`}>
      <span className={success ? styles.TitleSuccess : styles.Title}>{left}</span>
      <span className={styles.Title}>{right}</span>
    </div>
  )
}

export default DataHeader
