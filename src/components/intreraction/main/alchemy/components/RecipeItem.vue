<script setup lang="ts">
import { ref, computed } from 'vue'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'
import type { Recipe } from '@/types/recipe'
import { useAction } from '@/composables/useAction'
import { useIngredient } from '@/composables/useIngredient'
import { useInventory } from '@/composables/useInventory'
import { useCrafting } from '@/composables/useCrafting'
const { craftRecipe } = useCrafting()
const { getItemQuantity, inventory } = useInventory()
const { ingredients } = useIngredient()

const { startAction } = useAction()
const props = defineProps<{
    recipe: Recipe
}>()


const allIngredients = ingredients.value
const isOpen = ref(false)
const mappedIngredients = computed(() => {
    return props.recipe.ingredients.map((reqId) => {
        const item = allIngredients.find((i) => i.id === reqId)
        return item ? item.name : 'Unknown'
    })
})

const isCraftable = computed(() =>
    props.recipe.ingredients.every(reqId => {
        const item = inventory.value.find(
            i => i.type === 'ingredient' && i.id === reqId
        )
        return getItemQuantity(item.id, 'ingredient') > 0
    })
)
const getRecipeQuantity = computed(() => {

    return getItemQuantity(props.recipe.id, 'recipe')
})
</script>

<template>
    <li class="rounded border-4 border-black bg-black/30 font-semibold flex flex-col">
        <div class="flex gap-x-4 pr-4 items-center">
            <div class="relative w-16 h-16 mr-2">
                <img :src="props.recipe.icon" class="w-full h-full " />
                <span :class="{ 'text-red-500': !getRecipeQuantity }" class="qty-badge">
                    {{ getRecipeQuantity }}
                </span>
            </div>
            <span class="drop-shadow-custom font-semibold">{{ props.recipe.name }}</span>
            <ButtonPrimary @click="startAction(props.recipe.actionType, () => craftRecipe(props.recipe), props.recipe,)"
                :class="{ 'opacity-30': !isCraftable }" :disabled="!isCraftable">
                Craft
            </ButtonPrimary>
            <ButtonPrimary :class="{ 'rotate-180': isOpen }" @click="isOpen = !isOpen">V</ButtonPrimary>
            <p v-if="!isCraftable" class="text-red-500">Missing ingredients</p>
        </div>
        <div v-show="isOpen">
            {{ mappedIngredients.join(', ') }}
        </div>
    </li>
</template>

<style scoped>
@reference "@/styles.css";

.qty-badge {
    @apply absolute -bottom-1 z-10 -right-1 flex items-center justify-center rounded-full border-2 border-amber-600 bg-black font-semibold w-6 h-6;
}
</style>
