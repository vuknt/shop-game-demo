<script setup lang="ts">
import { onMounted } from 'vue'
import { useTime } from '@/composables/useTime'
import { useCustomer } from '@/composables/useCustomer'
import { useSound } from '@/composables/useSound'

import MainContainer from '@/components/intreraction/main/MainContainer.vue'
import VisualContainer from '@/components/visual/VisualContainer.vue'

const { startClock } = useTime()
const { trySpawnCustomer } = useCustomer()
const { playMusic } = useSound()

onMounted(() => {
    playMusic()
    startClock(() => {
        const { currentHour } = useTime()
        trySpawnCustomer(currentHour.value)
    })
})

</script>

<template>
    <section class="game-panel-wrapper">
        <MainContainer class="game-panel" />
        <VisualContainer class="game-panel relative" />
    </section>
</template>

<style scoped>
@reference "@/styles.css";

.game-panel {
    @apply flex text-white drop-shadow-custom overflow-auto rounded;
}

.game-panel-wrapper {
    @apply grid h-full grid-cols-2 gap-8;
}
</style>