import type { ActionState } from '@/types/action'
import { ActionType } from '@/types/action'
import { ref } from 'vue'
import { usePlayer } from '@/composables/usePlayer'
const { updateHealth } = usePlayer()
const currentAction = ref<ActionState | null>(null)
const DEFAULT_ACTION_DURATION = 10

function progressAction(): void {
  if (!currentAction.value) return
  currentAction.value.elapsedTime++
  if (currentAction.value.elapsedTime >= currentAction.value.duration) {
    try {
      currentAction.value.callback()
    } catch (error) {
      console.error('Error executing action callback:', error)
    } finally {
      updateHealth(-5)
      clearAction()
    }
  }
}
function startAction(
  actionType: ActionType,
  callback: () => void,
  recipe?: { name: string; duration: number },
): void {
  let actionDuration = DEFAULT_ACTION_DURATION
  switch (actionType) {
    case ActionType.Crafting || ActionType.Brewing:
      actionDuration = recipe?.duration || DEFAULT_ACTION_DURATION
      break
    case ActionType.Serving:
      actionDuration = DEFAULT_ACTION_DURATION / 2
      break
    default:
      console.warn(`Unknown action type: ${actionType}`)
  }
  currentAction.value = {
    name: actionType,
    item: recipe?.name,
    duration: actionDuration,
    elapsedTime: 0,
    callback,
  }
}
function clearAction(): void {
  currentAction.value = null
}
export function useAction() {
  return { currentAction, startAction, progressAction, clearAction }
}
