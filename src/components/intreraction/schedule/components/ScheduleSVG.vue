<script setup lang="ts">
const props = defineProps({
    scheduleHeight: { type: Number, default: 0 },
})
</script>

<template>
    <svg :style="{ transform: `translateY(${props.scheduleHeight}px)` }" class="my-svg-component" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
            clip-rule="evenodd" />
    </svg>
    {{ (props.scheduleHeight / 9).toFixed(0) + ' %' }}
</template>

<style scoped>
@reference "@/styles.css";

.my-svg-component {
    @apply w-12 h-12 text-amber-600;
}
</style>
