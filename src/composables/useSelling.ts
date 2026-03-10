import { ref } from 'vue'
import { useSound } from '@/composables/useSound'
import { usePlayer } from '@/composables/usePlayer'
import { useInventory } from '@/composables/useInventory'
import type { InventoryItem } from '@/types/inventory'
const { gold, reputation } = usePlayer()
const { playSellSound, playPlaceItemSound } = useSound()
const { removeItemFromInventory } = useInventory()

const counterItems = ref<InventoryItem[]>([])

function moveItemToCounter(item: InventoryItem): void {
  const counterItem = counterItems.value.find((i) => i.id === item.id && i.type === item.type)
  if (counterItem) {
    counterItem.quantity++
  } else {
    counterItems.value.push({ ...item, quantity: 1 })
  }

  removeItemFromInventory(item.id, item.type, 1)
  playPlaceItemSound()
}

function sellItem(itemId: string, price: number): void {
  console.log('Attempting to sell item with ID:', itemId, 'for price:', price)
  const itemIndex = counterItems.value.findIndex((i) => i.id === itemId)

  if (itemIndex !== -1) {
    if (counterItems.value[itemIndex].quantity > 1) {
      counterItems.value[itemIndex].quantity--
    } else {
      counterItems.value.splice(itemIndex, 1)
    }
    gold.value += price
    reputation.value += 1
  }

  playSellSound()
}

export function useSelling() {
  return { moveItemToCounter, sellItem, counterItems }
}
