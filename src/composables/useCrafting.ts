import type { Recipe } from '@/types/recipe'
import { useSound } from '@/composables/useSound'
import { useInventory } from '@/composables/useInventory'
import { ActionType } from '@/types/action'

const { inventory } = useInventory()
const { playCraftSound, playBrewSound } = useSound()

function craftRecipe(recipe: Recipe): void {
  const inv = inventory.value
  const existing = inv.find((i) => i.type === 'recipe' && i.id === recipe.id)

  if (existing) {
    existing.quantity += 1
  } else {
    inv.push({ id: recipe.id, type: 'recipe', quantity: 1 })
  }

  for (const ingredient of recipe.ingredients) {
    const invIngredient = inv.find((i) => i.type === 'ingredient' && i.id === ingredient)
    if (invIngredient && invIngredient.quantity > 0) {
      invIngredient.quantity--
    }
  }
  switch (recipe.actionType) {
    case ActionType.Crafting:
      playCraftSound()
      break
    case ActionType.Brewing:
      playBrewSound()
      break
    default:
      console.warn(`Unknown action type: ${recipe.actionType}`)
  }
}

export function useCrafting() {
  return { craftRecipe }
}
