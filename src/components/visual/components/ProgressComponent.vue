<script setup lang="ts">
import { useAction } from '@/composables/useAction'

const { currentAction } = useAction()
</script>

<template>
    <div v-if="currentAction">
        <label class="text-center text-2xl" for="currentAction">{{ currentAction.name }}</label>
        <label class="text-center">{{ currentAction.item }}</label>
        <progress id="currentAction" :value="currentAction.elapsedTime" :max="currentAction.duration"
            aria-valuenow="currentAction.elapsedTime" aria-valuemax="currentAction.duration">
            {{ currentAction.elapsedTime }}/{{ currentAction.duration }}
        </progress>
    </div>
</template>

<style scoped>
@reference "@/styles.css";

progress {
    @apply w-full rounded-full bg-black;
}

progress::-webkit-progress-bar {
    @apply w-full rounded-full bg-black;
}

progress::-webkit-progress-value {
    @apply w-full rounded-full bg-amber-600 transition-all;
}

progress::-moz-progress-bar {
    @apply w-full rounded-full bg-black;
}
</style>