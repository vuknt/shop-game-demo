export interface InventoryItem {
  id: string
  type: InventoryItemType
  quantity: number
}
export type InventoryItemType = 'recipe' | 'ingredient'
