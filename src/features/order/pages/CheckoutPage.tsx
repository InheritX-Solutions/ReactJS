import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '@hooks/redux'
import { CheckoutSummary } from '@features/order/components/CheckoutSummary/CheckoutSummary'
import { ContactData } from '@features/order/components/ContactData/ContactData'

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { ingredients, purchasable } = useAppSelector(state => state.burger)
  const [step, setStep] = useState<'summary' | 'contact'>('summary')

  if (!purchasable) {
    navigate('/')
    return null
  }

  const checkoutCancelledHandler = () => {
    navigate('/')
  }

  const checkoutContinuedHandler = () => {
    setStep('contact')
  }

  return (
    <div>
      {step === 'summary' ? (
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContinued={checkoutContinuedHandler}
        />
      ) : (
        <ContactData />
      )}
    </div>
  )
}
