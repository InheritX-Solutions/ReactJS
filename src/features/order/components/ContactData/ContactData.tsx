import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { placeOrder } from '@features/order/slice/orderSlice'
import { resetIngredients } from '@features/burger/slice/burgerSlice'
import { Button } from '@components/ui/Button/Button'
import { Input } from '@components/ui/Input/Input'
import { Spinner } from '@components/ui/Spinner/Spinner'
import { orderSchema } from '@features/order/validation/orderSchema'
import styles from './ContactData.module.scss'
import type { OrderFormData } from '@/types/index'

export const ContactData: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { ingredients, totalPrice } = useAppSelector(state => state.burger)
  const { loading, purchased } = useAppSelector(state => state.order)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      email: '',
      street: '',
      zipCode: '',
      country: '',
      deliveryMethod: 'fastest'
    }
  })

  const onSubmit = async (data: OrderFormData) => {
    const order = {
      ingredients,
      price: totalPrice,
      orderData: data
    }
    await dispatch(placeOrder(order))
  }

  if (purchased) {
    dispatch(resetIngredients())
    navigate('/')
  }

  let form = (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactData}>
      <h4>Enter your Contact Data</h4>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            label="Name"
            elementType="input"
            type="text"
            placeholder="Your Name"
            error={errors.name?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            label="E-Mail"
            elementType="input"
            type="email"
            placeholder="Your E-Mail"
            error={errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="street"
        control={control}
        render={({ field }) => (
          <Input
            label="Street"
            elementType="input"
            type="text"
            placeholder="Street"
            error={errors.street?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="zipCode"
        control={control}
        render={({ field }) => (
          <Input
            label="ZIP Code"
            elementType="input"
            type="text"
            placeholder="ZIP Code"
            error={errors.zipCode?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Input
            label="Country"
            elementType="input"
            type="text"
            placeholder="Country"
            error={errors.country?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="deliveryMethod"
        control={control}
        render={({ field }) => (
          <Input
            label="Delivery Method"
            elementType="select"
            options={[
              { value: 'fastest', displayValue: 'Fastest' },
              { value: 'cheapest', displayValue: 'Cheapest' }
            ]}
            {...field}
          />
        )}
      />
      <Button variant="success" type="submit" disabled={loading}>
        ORDER
      </Button>
    </form>
  )

  if (loading) {
    form = <Spinner />
  }

  return <div className={styles.contactData}>{form}</div>
}
