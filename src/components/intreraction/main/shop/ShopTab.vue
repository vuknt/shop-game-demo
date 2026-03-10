<script setup lang="ts">
import InventoryItem from './components/InventoryItem.vue'
import { useInventory } from '@/composables/useInventory';
import { useSelling } from '@/composables/useSelling';
import { useCustomer } from '@/composables/useCustomer';
import CounterItem from './components/CounterItem.vue';
import CustomerCard from './components/CustomerCard.vue';
const { counterItems } = useSelling()
const { inventory } = useInventory()
const { customerQueue } = useCustomer()
</script>

<template>
    <div class="shop-tab">
        <section class="item-grid-container">
            <div>
                <h3>Inventory</h3>
                <ul class="flex flex-col gap-4">
                    <InventoryItem v-for="item in inventory.filter(i => i.type === 'recipe' && i.quantity > 0)"
                        :key="item.id" :item="item" />
                </ul>
            </div>
            <div>
                <h3>Sale Counter</h3>
                <ul class="flex flex-col gap-4">
                    <CounterItem v-for="item in counterItems.filter(i => i.quantity > 0)" :key="item.id" :item="item" />
                </ul>
            </div>
        </section>
        <section class="customer-section">
            <h3>Customers</h3>
            <ul class="flex justify-center gap-x-8">
                <CustomerCard v-for="(customer, arrayIndex) in customerQueue" :array-index="arrayIndex"
                    :key="customer?.id" :customer="customer" />
            </ul>
        </section>
    </div>
</template>

<style scoped>
@reference "@/styles.css";

.shop-tab {
    @apply flex flex-col h-full;

}

.item-grid-container {
    @apply grid grid-cols-2 gap-4 h-1/2;
}

.customer-section {
    @apply h-1/2;
}
</style>
