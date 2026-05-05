import React from 'react'
import { Burger } from '@features/burger/components/Burger/Burger'
import { Button } from '@components/ui/Button/Button'
import styles from './CheckoutSummary.module.scss'
import type { Ingredients } from '@/types/index'

interface CheckoutSummaryProps {
  ingredients: Ingredients
  checkoutCancelled: () => void
  checkoutContinued: () => void
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  ingredients,
  checkoutCancelled,
  checkoutContinued
}) => {
  return (
    <div className={styles.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={ingredients} />
      </div>
      <Button variant="danger" onClick={checkoutCancelled}>
        CANCEL
      </Button>
      <Button variant="success" onClick={checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  )
}
