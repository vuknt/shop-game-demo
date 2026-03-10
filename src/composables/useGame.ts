import { ref } from 'vue'
import { useTime } from '@/composables/useTime'
import { useSound } from '@/composables/useSound'
const isGameOver = ref(false)
function endGame() {
  isGameOver.value = true
  const { pauseClock } = useTime()
  const { playDeathSound } = useSound()
  playDeathSound()
  pauseClock()
}
export function useGame() {
  return {
    isGameOver,
    endGame,
  }
}
