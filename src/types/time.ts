import { Ref } from 'vue'
export enum TimePhase {
  Day = 'Day',
  Night = 'Night',
}
export interface TimeData {
  day: Ref<number>
  currentDayPhase: Ref<TimePhase>
  currentHour: Ref<number>
  timeElapsed: Ref<number>
  isPaused: Ref<boolean>
  startClock: (onCustomerTick?: () => void) => void
  pauseClock: () => void
}
