import { ref, computed } from 'vue'
import type { TimeData } from '@/types/time'
import { TimePhase } from '@/types/time'
import { useAction } from '@/composables/useAction'
import { useCustomer } from '@/composables/useCustomer'
import { usePlayer } from './usePlayer'

const { progressAction } = useAction()
const { trySpawnCustomer, decreaseCustomerPatience } = useCustomer()
const CUSTOMER_TICK_INTERVAL = 10 // Adjust this value to control how often customers arrive (in game ticks)
const WOUND_TICK_INTERVAL = 30
const tickInterval = 100 // set to 1000ms in production
const ticksPerGameHour = 60

const day = ref(1)
const timeElapsed = ref(0)
const isPaused = ref(false)
const currentDayPhase = ref<TimePhase>(TimePhase.Day)

let intervalId: number | null = null

const currentHour = computed(() => Math.floor(timeElapsed.value / ticksPerGameHour))

function advanceTime() {
  if (isPaused.value) return

  timeElapsed.value++
  progressAction()

  if (timeElapsed.value % CUSTOMER_TICK_INTERVAL === 0) {
    trySpawnCustomer(currentHour.value)
    decreaseCustomerPatience()
  }
  if (timeElapsed.value % WOUND_TICK_INTERVAL === 0) {
    // Player takes 1 damage per in-game hour due to unravelling wounds
    usePlayer().updateHealth(-1)
  }

  currentDayPhase.value = timeElapsed.value < 720 ? TimePhase.Day : TimePhase.Night

  if (timeElapsed.value >= 960) {
    day.value++
    timeElapsed.value = 0
  }
}

function startClock() {
  if (intervalId !== null) return
  isPaused.value = false
  intervalId = setInterval(advanceTime, tickInterval) as unknown as number
}

function pauseClock() {
  isPaused.value = true
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
}

export function useTime(): TimeData {
  return { startClock, pauseClock, currentDayPhase, day, currentHour, timeElapsed, isPaused }
}
