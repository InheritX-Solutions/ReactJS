import React from 'react'
import styles from './BuildControl.module.scss'

interface BuildControlProps {
  label: string
  added: () => void
  removed: () => void
  disabled: boolean
}

export const BuildControl: React.FC<BuildControlProps> = ({
  label,
  added,
  removed,
  disabled
}) => {
  return (
    <div className={styles.buildControl}>
      <div className={styles.label}>{label}</div>
      <button className={styles.less} onClick={removed} disabled={disabled}>
        Less
      </button>
      <button className={styles.more} onClick={added}>
        More
      </button>
    </div>
  )
}
