<script setup lang="ts">
import { computed } from 'vue'
import type { Ingredient } from '@/types/ingredient'
import { useInventory } from '@/composables/useInventory';
const { getItemQuantity } = useInventory()

const props = defineProps<{
    ingredient: Ingredient
}>()

const quantity = computed(() => getItemQuantity(props.ingredient.id, 'ingredient'))

const outOfStock = computed(() => quantity.value === 0)
</script>

<template>
    <div class="bg-amber-950 rounded">
        <div class="flex bg-amber-950 gap-x-2 items-center rounded">
            <div class="relative w-16 h-16 mr-2">
                <img :src="props.ingredient.icon" class="w-full h-full rounded" />
                <span :class="{ 'text-red-500': !quantity }"
                    class="absolute -bottom-1 z-10 -right-1 flex items-center justify-center rounded-full border-2 border-amber-600 bg-black drop-shadow-custom font-semibold w-6 h-6">
                    {{ quantity }}
                </span>
            </div>
            {{ props.ingredient.name }}
            <p v-if="outOfStock" class="text-red-500">Out of stock</p>
        </div>
    </div>
</template>

<style scoped>
@reference "@/styles.css";
/* Component-specific styles */
</style>
