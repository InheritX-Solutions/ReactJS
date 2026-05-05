import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { orderService } from '@services/orderService'
import type { Order } from '@/types/index'

interface OrderState {
  loading: boolean
  error: string | null
  orders: Order[]
  purchased: boolean
}

const initialState: OrderState = {
  loading: false,
  error: null,
  orders: [],
  purchased: false
}

export const placeOrder = createAsyncThunk(
  'order/placeOrder',
  async (order: Order, { rejectWithValue }) => {
    try {
      const response = await orderService.placeOrder(order)
      return response
    } catch (error) {
      return rejectWithValue('Failed to place order')
    }
  }
)

export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderService.getOrders()
      const orders: Order[] = Object.keys(response).map(key => ({
        ...response[key],
        id: key
      }))
      return orders
    } catch (error) {
      return rejectWithValue('Failed to fetch orders')
    }
  }
)

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    purchaseInit: (state) => {
      state.purchased = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(placeOrder.fulfilled, (state) => {
        state.loading = false
        state.purchased = true
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.loading = false
        state.orders = action.payload
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  }
})

export const { purchaseInit } = orderSlice.actions
export default orderSlice.reducer
