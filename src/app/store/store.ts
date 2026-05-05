import { configureStore } from '@reduxjs/toolkit'
import burgerReducer from '@features/burger/slice/burgerSlice'
import orderReducer from '@features/order/slice/orderSlice'

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
    order: orderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
