import { Ref } from 'vue'
export interface PlayerState {
  health: Ref<number>
  gold: Ref<number>
  reputation: Ref<number>
  currentWoundState: Ref<WoundState>
  updateHealth: (amount: number) => void
  updateGold: (amount: number) => void
  updateReputation: (amount: number) => void
}
export interface WoundState {
  icon: string
  severity: 'tended' | 'aching' | 'grievous'
}
