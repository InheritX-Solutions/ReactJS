import { api } from './api'
import type { Order } from '@/types/index'

export const orderService = {
  placeOrder: async (order: Order): Promise<{ name: string }> => {
    return api.post('/orders.json', order)
  },

  getOrders: async (): Promise<Record<string, Order>> => {
    return api.get('/orders.json')
  }
}
