import { FC } from 'react'
import styles from './Footer.module.scss'

export interface FooterProps {
  children: React.ReactNode | string
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <div className={styles.Container}>
      {typeof children === 'string' ? <span className={styles.Text}>{children}</span> : children}
    </div>
  )
}

export default Footer
