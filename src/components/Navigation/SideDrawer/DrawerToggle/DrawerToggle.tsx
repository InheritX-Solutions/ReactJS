import React from 'react'
import styles from './DrawerToggle.module.scss'

interface DrawerToggleProps {
  onClick: () => void
}

export const DrawerToggle: React.FC<DrawerToggleProps> = ({ onClick }) => {
  return (
    <div className={styles.drawerToggle} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
