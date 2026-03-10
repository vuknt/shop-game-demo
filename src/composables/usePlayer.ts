import { computed, ref, watch } from 'vue'
import { useGame } from '@/composables/useGame'
import type { PlayerState, WoundState } from '@/types/player'
import woundTendedIcon from '@/assets/images/ui/wounds_tended.png'
import woundAchingIcon from '@/assets/images/ui/wounds_aching.png'
import woundGrivousIcon from '@/assets/images/ui/wounds_grievous.png'
const { endGame } = useGame()
const woundStates: WoundState[] = [
  { icon: woundTendedIcon, severity: 'tended' },
  { icon: woundAchingIcon, severity: 'aching' },
  { icon: woundGrivousIcon, severity: 'grievous' },
]
const health = ref(100)
const gold = ref(0)
const reputation = ref(0)
const currentWoundState = computed(() => {
  if (health.value > 0 && health.value <= 30) {
    return woundStates[2]
  } else if (health.value > 30 && health.value <= 60) {
    return woundStates[1]
  } else {
    return woundStates[0]
  }
})
watch(health, (newHealth) => {
  if (newHealth <= 0) {
    endGame()
  }
})
function updateHealth(amount: number) {
  health.value += amount
}

function updateGold(amount: number) {
  gold.value += amount
}

function updateReputation(amount: number) {
  reputation.value += amount
}
export function usePlayer(): PlayerState {
  return { health, gold, reputation, currentWoundState, updateHealth, updateGold, updateReputation }
}
