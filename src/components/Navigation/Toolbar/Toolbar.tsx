import React from 'react'
import { Logo } from '@components/Logo/Logo'
import { NavigationItems } from '@components/Navigation/NavigationItems/NavigationItems'
import { DrawerToggle } from '@components/Navigation/SideDrawer/DrawerToggle/DrawerToggle'
import styles from './Toolbar.module.scss'

interface ToolbarProps {
  drawerToggleClicked: () => void
}

export const Toolbar: React.FC<ToolbarProps> = ({ drawerToggleClicked }) => {
  return (
    <header className={styles.toolbar}>
      <DrawerToggle onClick={drawerToggleClicked} />
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}
