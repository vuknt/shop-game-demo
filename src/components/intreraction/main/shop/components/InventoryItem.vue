<script setup lang="ts">
import { computed } from 'vue'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'
import type { InventoryItem } from '@/types/inventory'
import { useSelling } from '@/composables/useSelling';
import { useRecipe } from '@/composables/useRecipe';
import { useIngredient } from '@/composables/useIngredient';
import type { Recipe } from '@/types/recipe'
import type { Ingredient } from '@/types/ingredient'
import { useInventory } from '@/composables/useInventory';
import goldIcon from '@/assets/images/ui/gold_coin.png'

const { moveItemToCounter } = useSelling()
const { getRecipeById, calculateRecipeCost } = useRecipe()
const { getItemQuantity } = useInventory()
const { getIngredientById } = useIngredient()
const props = defineProps<{
    item: InventoryItem
}>()

const currentItemType = computed(() => props.item.type)
const quantity = computed(() => getItemQuantity(props.item.id, props.item.type))

const recipeCost = computed(() => {
    const recipe = getRecipeById(props.item.id)
    return recipe ? calculateRecipeCost(recipe) : 0
})

const itemData = computed<Recipe | Ingredient | null>(() => {
    if (currentItemType.value === 'ingredient') {
        return getIngredientById(props.item.id)
    }
    if (currentItemType.value === 'recipe') {
        return getRecipeById(props.item.id)
    }
    return null
})


</script>

<template>
    <li class="bg-amber-950 rounded ">
        <div class="flex bg-amber-950 gap-x-2 items-center rounded">
            <div class="relative w-16 h-16 mr-2">
                <img :src="itemData?.icon" class="w-full h-full rounded" />
                <span :class="{ 'text-red-500': !quantity }"
                    class="absolute -bottom-1 z-10 -right-1 flex items-center justify-center rounded-full border-2 border-amber-600 bg-black drop-shadow-custom font-semibold w-6 h-6">
                    {{ quantity }}
                </span>
            </div>
            {{ itemData?.name || 'Unknown Item Name' }}
            <div class="flex flex-col bg-black w-16">
                Price
                <span class="flex p-2 items-center justify-center text-amber-300 font-semibold">
                    <img :src="goldIcon" class="w-5 h-5 mr-2">{{ recipeCost
                    }}</span>
            </div>
            <ButtonPrimary @click="moveItemToCounter(item)" v-if="item.type === 'recipe'">To Counter
            </ButtonPrimary>
            <ButtonPrimary v-if="item.type === 'recipe'">Use
            </ButtonPrimary>
        </div>
    </li>
</template>

<style scoped>
@reference "@/styles.css";
/* Component-specific styles */
</style>
