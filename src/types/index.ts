export type IngredientType = 'salad' | 'bacon' | 'cheese' | 'meat'
export type BurgerPartType = IngredientType | 'bread-top' | 'bread-bottom'

export interface Ingredients {
  salad: number
  bacon: number
  cheese: number
  meat: number
}

export interface OrderFormData {
  name: string
  email: string
  street: string
  zipCode: string
  country: string
  deliveryMethod: 'fastest' | 'cheapest'
}

export interface Order {
  id?: string
  ingredients: Ingredients
  price: number
  orderData: OrderFormData
}
