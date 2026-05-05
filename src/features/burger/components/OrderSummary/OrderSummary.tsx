import React from 'react'
import { Button } from '@components/ui/Button/Button'
import type { Ingredients } from '@/types/index'

interface OrderSummaryProps {
  ingredients: Ingredients
  price: number
  purchaseCancelled: () => void
  purchaseContinued: () => void
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued
}) => {
  const ingredientSummary = Object.keys(ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey as keyof Ingredients]}
      </li>
    )
  })

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button variant="danger" onClick={purchaseCancelled}>
          CANCEL
        </Button>
        <Button variant="success" onClick={purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    </>
  )
}
