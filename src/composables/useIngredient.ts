import { ref } from 'vue'
import type { Ingredient } from '@/types/ingredient'
import magicDustIcon from '@/assets/images/ingredients/magic_dust.png'
import waterIcon from '@/assets/images/ingredients/water.png'
import boneIcon from '@/assets/images/ingredients/bone.png'
import herbIcon from '@/assets/images/ingredients/herb.png'
import waxIcon from '@/assets/images/ingredients/wax.png'

const ingredients = ref<Ingredient[]>([
  {
    id: '1',
    name: 'Magic Dust',
    icon: magicDustIcon,
    value: 10,
  },
  {
    id: '2',
    name: 'Water',
    icon: waterIcon,
    value: 1,
  },
  {
    id: '3',
    name: 'Bone',
    icon: boneIcon,
    value: 5,
  },
  {
    id: '4',
    name: 'Herb',
    icon: herbIcon,
    value: 3,
  },
  {
    id: '5',
    name: 'Wax',
    icon: waxIcon,
    value: 2,
  },
])
function getIngredientById(id: string): Ingredient | undefined {
  return ingredients.value.find((ing) => ing.id === id)
}

export function useIngredient() {
  return { ingredients, getIngredientById }
}
