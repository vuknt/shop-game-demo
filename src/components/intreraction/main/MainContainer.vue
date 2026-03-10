<script setup lang="ts">
import { ref } from 'vue'
import Alchemy from './alchemy/AlchemyTab.vue'
import Shop from './shop/ShopTab.vue'
import Study from './study/StudyTab.vue'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'
import paperImage from '@/assets/images/bg_paper.jpg'

import { useGame } from '@/composables/useGame'
const { isGameOver } = useGame()
const tabs = { Alchemy, Shop, Study }
type TabName = keyof typeof tabs

const selectedTab = ref<TabName>('Alchemy')
const activeTabClass = (tab: TabName) => ({
    'tab-active': selectedTab.value === tab
})
function reloadGame() {
    globalThis.location.reload()
}

</script>

<template>
    <section class="relative drop-shadow-custom">
        <section v-show="isGameOver" class="absolute bg-black/50 flex z-10 justify-center items-center inset-0">
            <ButtonPrimary @click="reloadGame()" class="text-4xl select-none px-4 py-2">
                Try Again ?
            </ButtonPrimary>
        </section>
        <section class="main-container" :class="{ 'blur pointer-events-none': isGameOver }">
            <nav>
                <span v-for="(_, tab) in tabs" :key="tab" @click="selectedTab = tab" :class="activeTabClass(tab)"
                    class="tab border-r-4 border-b-4 cursor-pointer">
                    {{ tab }}
                </span>
                <span class="w-full border-b-4 tab"></span>
            </nav>
            <component class="tab-content" :is="tabs[selectedTab]">Main content</component>
        </section>
        <span :style="{ backgroundImage: `url(${paperImage})` }" class="overlay"></span>
    </section>
</template>

<style>
@reference "@/styles.css";

.overlay {
    @apply absolute inset-0 -z-1 bg-cover bg-center opacity-80;
}

.main-container {
    @apply flex flex-col text-center w-full rounded-r relative;

    nav {
        @apply flex text-black font-bold text-2xl;
    }
}

.tab {
    box-shadow: inset -0px -6px 3px 0px rgba(0, 0, 0, 0.25);
    @apply px-6 py-4 rounded-t select-none;

}

.tab:last-child {
    @apply border-r-0;
}

.tab-active {
    box-shadow: 6px -10px 3px 0px rgba(0, 0, 0, 0.25);
    @apply !border-b-0 z-30 animate-text-glow;
}

.tab-content {

    @apply p-4 grow rounded-b;

    h3 {
        @apply mb-4 text-2xl font-semibold drop-shadow-custom;
    }
}
</style>
