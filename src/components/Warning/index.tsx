import { FC } from 'react'
import styles from './Warning.module.scss'

export interface WarningProps {
  children: React.ReactNode | string
}

const Warning: FC<WarningProps> = ({ children }) => {
  return <div className={styles.Warning}>{typeof children === 'string' ? <span>{children}</span> : children}</div>
}

export default Warning
