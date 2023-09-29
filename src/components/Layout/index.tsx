import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Navbar, { NavBarButtonType } from '../NavBar'
import styles from './Default.module.scss'

type DefaultLayoutProps = {
  showNavBar?: boolean
  navBarButtons?: NavBarButtonType[]
  footer?: React.ReactNode
  noPrev?: boolean
}

const DefaultLayout: React.FC<PropsWithChildren<DefaultLayoutProps>> = ({
  children,
  showNavBar,
  navBarButtons,
  footer,
  noPrev = false,
}) => {
  const outerClass = clsx(styles.OuterContainer, showNavBar ? styles.withNav : {})

  return (
    <div className={styles.BgContainer}>
      <div className={styles.EmulatorCard}>
        <header className={styles.EmulatorHeader}>
          <div className={styles.Title}>
            <FontAwesomeIcon
              icon={faPlaneCircleCheck}
              className={styles.Icon}
              style={{
                height: '30px',
                width: '24px',
              }}
            />
            {` AW139 - Base`}
          </div>
        </header>
        <div className={styles.EmulatorContent}>
          <div className={outerClass}>
            {showNavBar && <Navbar buttons={navBarButtons} noPrev={noPrev} />}

            <main id="main" className={styles.MainContent}>
              <div className={styles.InnerContainer}>{children}</div>

              {footer && <div className={styles.Footer}>{footer}</div>}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
