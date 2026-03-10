import type { Recipe } from '@/types/recipe'
export interface Customer {
  id: string
  request: Recipe
  waitTime: number
  patience: number
  isBeingServed: boolean
  income: number
}
