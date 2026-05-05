import { useState } from 'react'
import { Toolbar } from '@components/Navigation/Toolbar/Toolbar'
import { SideDrawer } from '@components/Navigation/SideDrawer/SideDrawer'
import styles from './MainLayout.module.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false)
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(prev => !prev)
  }

  return (
    <>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={styles.content}>{children}</main>
    </>
  )
}
