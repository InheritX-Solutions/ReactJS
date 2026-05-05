import React from 'react'
import { BuildControl } from '@features/burger/components/BuildControl/BuildControl'
import styles from './BuildControls.module.scss'
import type { Ingredients, IngredientType } from '@/types'
import { INGREDIENT_NAMES } from '@constants/ingredients'

interface BuildControlsProps {
  ingredients: Ingredients
  ingredientAdded: (type: IngredientType) => void
  ingredientRemoved: (type: IngredientType) => void
  purchasable: boolean
  price: number
  ordered: () => void
}

export const BuildControls: React.FC<BuildControlsProps> = ({
  ingredients,
  ingredientAdded,
  ingredientRemoved,
  purchasable,
  price,
  ordered
}) => {
  const controls = Object.keys(INGREDIENT_NAMES).map(ctrl => ({
    label: INGREDIENT_NAMES[ctrl as IngredientType],
    type: ctrl as IngredientType
  }))

  return (
    <div className={styles.buildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={ingredients[ctrl.type] <= 0}
        />
      ))}
      <button
        className={styles.orderButton}
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  )
}
