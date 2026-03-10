<!-- <script setup lang="ts">
import ScheduleSVG from './components/ScheduleSVG.vue'
import { ref, onMounted } from 'vue'
const scheduleHeight = ref(0)
const direction = ref(1)
const bgImage = ref('@/assets/alchemist_1_1.png')
onMounted(() => {
    const animate = () => {
        scheduleHeight.value += direction.value / 10
        if (scheduleHeight.value > 900) {
            scheduleHeight.value = 0
        }
        if (scheduleHeight.value < 300) {
            bgImage.value = '@/assets/alchemist_1_1.png'
        }
        if (scheduleHeight.value >= 300 && scheduleHeight.value < 600) {
            bgImage.value = '@/assets/alchemist_counter.png'
        }
        if (scheduleHeight.value >= 600) {
            bgImage.value = '@/assets/alchemist_study.png'
        }
        requestAnimationFrame(animate)
    }
    animate()
})
</script>

<template>
    <section class="schedule-container">
        Scheduler
        <ScheduleSVG :scheduleHeight />
    </section>
</template>

<style scoped>
@reference "@/styles.css";

.schedule-container {
    @apply text-center p-4 rounded-l bg-amber-950;
}
</style> -->
