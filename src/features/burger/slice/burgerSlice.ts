import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Ingredients, IngredientType } from '@/types/index'
import { INGREDIENT_PRICES, BASE_BURGER_PRICE } from '@constants/ingredients'

interface BurgerState {
  ingredients: Ingredients
  totalPrice: number
  purchasable: boolean
}

const initialIngredients: Ingredients = {
  salad: 0,
  bacon: 0,
  cheese: 0,
  meat: 0
}

const initialState: BurgerState = {
  ingredients: initialIngredients,
  totalPrice: BASE_BURGER_PRICE,
  purchasable: false
}

const updatePurchasable = (ingredients: Ingredients): boolean => {
  const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0)
  return sum > 0
}

const calculatePrice = (ingredients: Ingredients): number => {
  let price = BASE_BURGER_PRICE
  for (const [ingredient, count] of Object.entries(ingredients)) {
    price += INGREDIENT_PRICES[ingredient as IngredientType] * count
  }
  return +price.toFixed(2)
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<IngredientType>) => {
      state.ingredients[action.payload]++
      state.totalPrice = calculatePrice(state.ingredients)
      state.purchasable = updatePurchasable(state.ingredients)
    },
    removeIngredient: (state, action: PayloadAction<IngredientType>) => {
      if (state.ingredients[action.payload] > 0) {
        state.ingredients[action.payload]--
        state.totalPrice = calculatePrice(state.ingredients)
        state.purchasable = updatePurchasable(state.ingredients)
      }
    },
    resetIngredients: (state) => {
      state.ingredients = { ...initialIngredients }
      state.totalPrice = BASE_BURGER_PRICE
      state.purchasable = false
    }
  }
})

export const { addIngredient, removeIngredient, resetIngredients } = burgerSlice.actions
export default burgerSlice.reducer
