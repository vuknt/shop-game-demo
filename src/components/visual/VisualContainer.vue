<script setup lang="ts">
import { computed } from 'vue'
import { useTime } from '@/composables/useTime.js'
import { useGame } from '@/composables/useGame.js'
import StatsComponent from '@/components/visual/components/StatsComponent.vue'
import ProgressComponent from '@/components/visual/components/ProgressComponent.vue'
import ClockComponent from '@/components/visual/components/ClockComponent.vue'
import CustomerComponent from '@/components/visual/components/CustomerComponent.vue'
// Images
import dayImage from '@/assets/images/alchemist_lab_day.png'
import nightImage from '@/assets/images/alchemist_lab_night.png'
import gameOverImage from '@/assets/images/alchemist_death.png'
const { currentDayPhase } = useTime()
const { isGameOver } = useGame()

const activeImage = computed(() => {
    if (isGameOver.value) {
        return gameOverImage
    }
    return currentDayPhase.value === 'Day' ? dayImage : nightImage
}
)
</script>

<template>
    <div class="visual-container">
        <Transition name="fade">
            <img :src="activeImage" :key="activeImage" class="visual-container-background" />
        </Transition>
        <section v-show="isGameOver"
            class="absolute  inset-0 text-red-500 flex items-center justify-center text-6xl z-10">
            <span class="z-10 drop-shadow-custom">GAME OVER</span>
            <span class="h-1/4 w-full z-0 animate-open-rect-y bg-black/50 absolute"></span>
        </section>

        <section v-show="!isGameOver" class="visual-container-content">
            <!-- Player stats -->
            <StatsComponent class="stats-component" />

            <!-- Current action -->
            <ProgressComponent class="progress-component" />

            <!-- Customer stats -->
            <CustomerComponent class="customer-component" />

            <!-- Clock & day info -->
            <ClockComponent class="clock-component" />
        </section>

    </div>
</template>

<style scoped>
@reference "@/styles.css";

.visual-container {
    @apply relative h-full w-full overflow-hidden text-xl font-bold;

    .visual-container-background {
        @apply absolute top-0 left-0 h-full w-full object-cover object-center;
    }
}

.stats-component {
    @apply absolute left-0 w-1/5 p-4 flex flex-col gap-y-2 drop-shadow-custom;
}

.progress-component {
    @apply absolute right-0 left-0 mx-auto w-1/4 p-4 flex flex-col gap-4 bg-black/50;
}

.clock-component {
    @apply absolute bottom-0 left-0 m-4 w-1/5 text-center drop-shadow-custom;
}

.customer-component {
    @apply absolute right-0 w-1/4 p-4 flex flex-col gap-y-2 drop-shadow-custom;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>