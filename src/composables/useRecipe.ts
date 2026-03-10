import { ref } from 'vue'
import type { Recipe } from '@/types/recipe'
import { ActionType } from '@/types/action'
import { useIngredient } from '@/composables/useIngredient'
import healingPotionIcon from '@/assets/images/recipes/healing_potion.png'
import healingSalveIcon from '@/assets/images/recipes/healing_salve.png'
import boneCharmIcon from '@/assets/images/recipes/bone_charm.png'

const { getIngredientById } = useIngredient()

const recipes = ref<Recipe[]>([
  {
    id: '1',
    name: 'Healing Potion',
    icon: healingPotionIcon,
    ingredients: ['1', '2'],
    duration: 15,
    actionType: ActionType.Brewing,
  },
  {
    id: '2',
    name: 'Healing Salve',
    icon: healingSalveIcon,
    ingredients: ['4', '5'],
    duration: 10,
    actionType: ActionType.Brewing,
  },
  {
    id: '3',
    name: 'Bone Charm',
    icon: boneCharmIcon,
    ingredients: ['3', '4'],
    duration: 20,
    actionType: ActionType.Crafting,
  },
])
function getRecipeById(id: string): Recipe | undefined {
  return recipes.value.find((rec) => rec.id === id)
}
function calculateRecipeCost(recipe: Recipe): number {
  return recipe.ingredients.reduce((total, ingId) => {
    const ingredient = getIngredientById(ingId)
    return total + (ingredient ? ingredient.value : 0)
  }, 0)
}

export function useRecipe() {
  return { recipes, getRecipeById, calculateRecipeCost }
}
