<script setup lang="ts">
import { useTime } from '@/composables/useTime';
import { computed } from 'vue'
import clockIcon from '@/assets/images/ui/clock.png'
import clockHandleIcon from '@/assets/images/ui/clock_handle.png'
const { day, timeElapsed, currentDayPhase, currentHour } = useTime()

const MINUTES_IN_DAY: number = 1440
const FULL_ROTATION_DEGREES: number = 360
const clockHandleRotation = computed(() =>
    (timeElapsed.value / MINUTES_IN_DAY) * FULL_ROTATION_DEGREES
)

</script>

<template>
    <div>
        <div>Day {{ day }} - {{ currentDayPhase }}</div>
        <div>Hour - {{ currentHour + 1 }}</div>
        <div id="clock" class="relative">
            <img :src="clockIcon" class="inline w-full" />
            <img :src="clockHandleIcon"
                class="absolute top-[45%] left-[10%] inline h-auto w-[45%] origin-[90%_50%] object-contain drop-shadow-custom"
                :style="{ transform: `rotate(${clockHandleRotation}deg)` }" />
        </div>
    </div>
</template>

<style scoped>
@reference "@/styles.css";
/* Component-specific styles */
</style>