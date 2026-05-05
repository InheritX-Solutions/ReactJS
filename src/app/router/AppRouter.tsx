import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@layouts/MainLayout'
import { BurgerBuilderPage } from '@features/burger/pages/BurgerBuilderPage'
import { CheckoutPage } from '@features/order/pages/CheckoutPage'
import { OrdersPage } from '@features/order/pages/OrdersPage'

export function AppRouter() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<BurgerBuilderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </MainLayout>
  )
}
