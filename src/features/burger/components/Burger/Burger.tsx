import React from 'react'
import { BurgerIngredient } from '@features/burger/components/BurgerIngredient/BurgerIngredient'
import styles from './Burger.module.scss'

import type {
  Ingredients,
  IngredientType,
  
} from '@/types'

interface BurgerProps {
  ingredients: Ingredients
}

export const Burger: React.FC<BurgerProps> = ({
  ingredients,
}) => {
  const transformedIngredientsArray =
    Object.keys(ingredients)
      .map(igKey => {
        return [
          ...Array(
            ingredients[
              igKey as keyof Ingredients
            ]
          ),
        ].map((_, i) => {
          return (
            <BurgerIngredient
              key={igKey + i}
              type={igKey as IngredientType}
            />
          )
        })
      })
      .reduce<React.ReactNode[]>(
        (arr, el) => {
          return arr.concat(el)
        },
        []
      )

  let transformedIngredients: React.ReactNode =
    transformedIngredientsArray

  if (
    transformedIngredientsArray.length === 0
  ) {
    transformedIngredients = (
      <p>
        Please start adding ingredients!
      </p>
    )
  }

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />

      {transformedIngredients}

      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}