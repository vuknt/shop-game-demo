<script setup lang="ts">
import goldIcon from '@/assets/images/ui/gold_coin.png'
import { ref, watch } from 'vue'
import reputationIcon from '@/assets/images/ui/reputation.png'
import { usePlayer } from '@/composables/usePlayer';
import unravellingDamageIcon from '@/assets/images/ui/unravelling_damage.png'
const { health, gold, reputation, currentWoundState } = usePlayer()
const keyToggle = ref(0)
const unravellingImminent = ref(false)
watch(health, (newHealth, oldHealth) => {
    if (newHealth < oldHealth) {
        keyToggle.value = keyToggle.value === 0 ? 2 : 0
    }
    if (newHealth < 30) {
        unravellingImminent.value = true
    } else {
        unravellingImminent.value = false
    }
})
</script>

<template>
    <div>
        <div class="flex items-center relative">
            <img :src="currentWoundState.icon" :class="{ 'animate-pulse': unravellingImminent }" class=" mr-1 inline
                w-full -mb-2" />
            <img :key="keyToggle" :src="unravellingDamageIcon"
                class="mr-1 w-full animate-ping-fade-once drop-shadow-custom transform-origin-center -mb-2 absolute" />
            <span>{{ health }}</span>
        </div>
        <div class="flex items-center">
            <img :src="goldIcon" class="inline h-9 mr-1" />
            <span>{{ gold }}</span>
        </div>
        <div class="flex items-center">
            <img :src="reputationIcon" class="inline h-9 mr-1 aspect-square object-contain" />
            <span>{{ reputation }}</span>
        </div>
    </div>
</template>
