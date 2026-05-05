import React from 'react'
import styles from './Input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label?: string
  error?: string
  elementType?: 'input' | 'select'
  options?: Array<{ value: string; displayValue: string }>
}

export const Input = React.forwardRef<HTMLInputElement | HTMLSelectElement, InputProps>(
  ({ label, error, elementType = 'input', options, ...props }, ref) => {
    let inputElement = null

    switch (elementType) {
      case 'input':
        inputElement = <input ref={ref as React.Ref<HTMLInputElement>} className={styles.inputElement} {...props} />
        break
      case 'select':
        inputElement = (
          <select ref={ref as React.Ref<HTMLSelectElement>} className={styles.inputElement} {...props}>
            {options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        )
        break
      default:
        inputElement = <input ref={ref as React.Ref<HTMLInputElement>} className={styles.inputElement} {...props} />
    }

    return (
      <div className={styles.input}>
        {label && <label className={styles.label}>{label}</label>}
        {inputElement}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
