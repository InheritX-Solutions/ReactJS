import { z } from 'zod'

export const orderSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  street: z.string().min(2, 'Street must be at least 2 characters'),
  zipCode: z.string().min(5, 'Zip Code must be at least 5 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  deliveryMethod: z.enum(['fastest', 'cheapest'])
})
