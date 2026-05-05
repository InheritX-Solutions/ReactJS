import React from 'react'
import styles from './Spinner.module.scss'

export const Spinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loader}></div>
    </div>
  )
}
