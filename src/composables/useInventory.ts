import { ref } from 'vue'
import type { InventoryItem, InventoryItemType } from '@/types/inventory'
const inventory = ref<InventoryItem[]>([
  { id: '2', type: 'ingredient', quantity: 5 },
  { id: '3', type: 'ingredient', quantity: 7 },
  { id: '4', type: 'ingredient', quantity: 23 },
  { id: '5', type: 'ingredient', quantity: 10 },
  { id: '1', type: 'ingredient', quantity: 3 },
])
function getItemInInventory(id: string, type: InventoryItemType) {
  return inventory.value.find((i) => i.id === id && i.type === type)
}
function getItemQuantity(id: string, type: InventoryItemType) {
  const item = getItemInInventory(id, type)
  return item ? item.quantity : 0
}
function addItemToInventory(id: string, type: InventoryItemType, quantity: number) {
  const item = getItemInInventory(id, type)
  if (item) {
    item.quantity += quantity
  } else {
    inventory.value.push({ id, type, quantity })
  }
}
function removeItemFromInventory(id: string, type: InventoryItemType, quantity: number) {
  const item = getItemInInventory(id, type)
  if (item) {
    if (item.quantity >= quantity) {
      item.quantity -= quantity
    }
  }
}
export function useInventory() {
  return {
    inventory,
    getItemInInventory,
    getItemQuantity,
    addItemToInventory,
    removeItemFromInventory,
  }
}
