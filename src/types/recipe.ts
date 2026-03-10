import type { ActionType } from '@/types/action'
export interface Recipe {
  id: string
  name: string
  icon: string
  ingredients: string[]
  duration: number
  actionType: ActionType
}
