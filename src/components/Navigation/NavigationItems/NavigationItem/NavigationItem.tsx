import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavigationItem.module.scss'

interface NavigationItemProps {
  link: string
  exact?: boolean
  children: React.ReactNode
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  link,
  exact,
  children
}) => {
  return (
    <li className={styles.navigationItem}>
      <NavLink
        to={link}
        end={exact}
        className={({ isActive }) =>
          isActive ? `${styles.navigationItem} ${styles.active}` : styles.navigationItem
        }
      >
        {children}
      </NavLink>
    </li>
  )
}
