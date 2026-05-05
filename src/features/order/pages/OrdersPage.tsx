import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { fetchOrders } from '@features/order/slice/orderSlice'
import { Order } from '@features/order/components/Order/Order'
import { Spinner } from '@components/ui/Spinner/Spinner'

export const OrdersPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { orders, loading } = useAppSelector(state => state.order)

  useEffect(() => {
    dispatch(fetchOrders())
  }, [dispatch])

  let ordersList: React.ReactNode = <Spinner />
  if (!loading) {
    ordersList = orders.map(order => <Order key={order.id} order={order} />)
  }

  return <div>{ordersList}</div>
}
