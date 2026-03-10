<script setup lang="ts">
// Imports, props, emits, refs, composables, lifecycle hooks
</script>

<template>
    <button class="btn px-2 py-1">
        <slot />
    </button>
</template>

<style scoped>
@reference "@/styles.css";

.btn {
    @apply bg-black text-white rounded hover:bg-amber-600 cursor-pointer;
}
</style>
