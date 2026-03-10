<script setup lang="ts">
import RecipeItem from './components/RecipeItem.vue'
import IngredientItem from './components/IngredientItem.vue'
import { useRecipe } from '@/composables/useRecipe'
import { useIngredient } from '@/composables/useIngredient'
const { recipes } = useRecipe()
const { ingredients } = useIngredient()
</script>

<template>
    <div class="alchemy-tab">
        <section>
            <h3>Recipes</h3>
            <ul>
                <RecipeItem v-for="recipe in recipes" :recipe="recipe" :key="recipe.id" />
            </ul>
        </section>
        <section>
            <h3>ingredients</h3>
            <ul>
                <IngredientItem v-for="ingredient in ingredients" :ingredient :key="ingredient.id" />
            </ul>
        </section>
    </div>
</template>

<style scoped>
@reference "@/styles.css";

.alchemy-tab {
    @apply flex flex-col bg-cover bg-center p-6 gap-6;

    section {
        @apply h-full;


        ul {
            @apply grid grid-cols-2 gap-4;
        }
    }
}
</style>
