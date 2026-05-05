import React from 'react'
import { Logo } from '@components/Logo/Logo'
import { NavigationItems } from '@components/Navigation/NavigationItems/NavigationItems'
import { Backdrop } from '@components/ui/Backdrop/Backdrop'
import styles from './SideDrawer.module.scss'

interface SideDrawerProps {
  open: boolean
  closed: () => void
}

export const SideDrawer: React.FC<SideDrawerProps> = ({ open, closed }) => {
  let attachedClasses = [styles.sideDrawer, styles.close]
  if (open) {
    attachedClasses = [styles.sideDrawer, styles.open]
  }

  return (
    <>
      <Backdrop show={open} onClick={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}
