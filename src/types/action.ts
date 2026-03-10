export interface ActionState {
  name: string
  item: string
  duration: number
  elapsedTime: number
  callback: () => void
}
export enum ActionType {
  Crafting = '⚒️Crafting',
  Gathering = '🫳Gathering',
  Serving = '🧙‍♂️Serving',
  Brewing = '🧪Brewing',
  Studying = '📖Studying',
}
