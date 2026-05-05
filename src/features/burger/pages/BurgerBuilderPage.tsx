import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { addIngredient, removeIngredient } from '@features/burger/slice/burgerSlice'
import { purchaseInit } from '@features/order/slice/orderSlice'
import { Burger } from '@features/burger/components/Burger/Burger'
import { BuildControls } from '@features/burger/components/BuildControls/BuildControls'
import { Modal } from '@components/ui/Modal/Modal'
import { OrderSummary } from '@features/burger/components/OrderSummary/OrderSummary'

export const BurgerBuilderPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { ingredients, totalPrice, purchasable } = useAppSelector(state => state.burger)
  const [purchasing, setPurchasing] = useState(false)

  const purchaseHandler = () => {
    setPurchasing(true)
  }

  const purchaseCancelHandler = () => {
    setPurchasing(false)
  }

  const purchaseContinueHandler = () => {
    dispatch(purchaseInit())
    navigate('/checkout')
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={(type) => dispatch(addIngredient(type))}
        ingredientRemoved={(type) => dispatch(removeIngredient(type))}
        ingredients={ingredients}
        purchasable={purchasable}
        price={totalPrice}
        ordered={purchaseHandler}
      />
    </>
  )
}
