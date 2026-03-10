<script setup lang="ts">
import { useCustomer } from '@/composables/useCustomer'
const { customerLog, currentHourProbability, currentCustomer } = useCustomer()
</script>

<template>
    <div>
        <span>Total Customers: {{ customerLog.totalSpawned }}</span>
        <span>Served Customers: {{ customerLog.totalServed }}</span>
        <div>Probability - {{ (currentHourProbability * 100).toFixed(0) }}%</div>
        <div v-show="currentCustomer">
            <span class="flex justify-center animate-bounce text-4xl">👨‍🌾</span>
            <div class="text-center text-lg">Current Customer: {{ currentCustomer?.id }}
                <div class="text-sm text-amber-600">
                    Wants: <span class="text-white">{{ currentCustomer?.request.name }}</span>
                    <img :src="currentCustomer?.request.icon" alt="Customer Request Image"
                        class="w-16 h-16 mx-auto mt-2">
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
@reference "@/styles.css";
/* Component-specific styles */
</style>