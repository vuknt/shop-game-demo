<script setup lang="ts">
import { computed } from 'vue';
import customerIcon from '@/assets/images/ui/customer.png';
import ButtonPrimary from '@/components/common/ButtonPrimary.vue';
import type { Customer } from '@/types/customer';
import { ActionType } from '@/types/action';
import { useCustomer } from '@/composables/useCustomer'
import { useSelling } from '@/composables/useSelling'
import { useAction } from '@/composables/useAction'
const { startAction } = useAction()
const { serveCustomer, pauseCustomerPatience } = useCustomer()
const { counterItems } = useSelling()

const props = defineProps<{
    customer: Customer | null
    arrayIndex: number
}>()

const canBeServed = computed(() => {
    return props.customer ? counterItems.value.some(i => i.id === props.customer?.request.id && i.quantity > 0) : false
})
</script>

<template>
    <li class="customer-card drop-shadow-custom">
        <ButtonPrimary v-show="props.customer" @click="pauseCustomerPatience(arrayIndex);
        startAction(ActionType.Serving,
            () => { serveCustomer(arrayIndex, props.customer?.request); });" :class="{ 'opacity-30': !canBeServed }"
            :disabled="!canBeServed">
            Serve Customer</ButtonPrimary>
        {{ props.customer?.request.name }}
        <div class="relative mt-2">
            <img class="icon-customer" :src="customerIcon" :class="{ 'opacity-30': !props.customer }"
                alt="Customer Icon" />
            <img v-show="props.customer?.request?.icon" class="icon-request" :src="props.customer?.request?.icon"
                alt="Request Icon" />
        </div>
        <div v-show="props.customer" class="w-full">
            <label class="text-center font-semibold" for="currentAction">Patience</label>
            <progress id="currentAction" :value="props.customer?.patience" :max="props.customer?.waitTime"
                aria-valuenow="props.customer?.patience" aria-valuemax="props.customer?.waitTime">
                {{ props.customer?.patience }}/{{ props.customer?.waitTime }}
            </progress>
        </div>
    </li>
</template>

<style scoped>
@reference "@/styles.css";

.customer-card {
    @apply flex flex-col items-center;

}

.icon-request {
    @apply w-12 h-12 absolute top-0 right-0 border-2 border-white rounded-full;
}

.icon-customer {
    @apply w-32 h-32;
}

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