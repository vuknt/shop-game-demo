import craftSoundFile from '@/assets/sounds/craft.mp3'
import sellSoundFile from '@/assets/sounds/sell.mp3'
import musicSoundFile from '@/assets/sounds/music.mp3'
import deathSoundFile from '@/assets/sounds/death.mp3'
import placeItemSoundFile from '@/assets/sounds/place_item.mp3'
import healSoundFile from '@/assets/sounds/heal.mp3'
import brewSoundFile from '@/assets/sounds/brew.mp3'
const craftSound = new Audio(craftSoundFile)
const sellSound = new Audio(sellSoundFile)
const music = new Audio(musicSoundFile)
const deathSound = new Audio(deathSoundFile)
const placeItemSound = new Audio(placeItemSoundFile)
const healSound = new Audio(healSoundFile)
const brewSound = new Audio(brewSoundFile)

function playMusic() {
  window.addEventListener(
    'click',
    () => {
      music.volume = 0.3
      music.loop = true
      music.play()
    },
    { once: true },
  )
}

function playSellSound() {
  sellSound.currentTime = 0
  sellSound.playbackRate = 1 + Math.random() * 0.5
  sellSound.play()
}
function playDeathSound() {
  deathSound.currentTime = 0
  music.muted = true
  deathSound.play()
}
function playPlaceItemSound() {
  placeItemSound.currentTime = 0
  placeItemSound.playbackRate = 1 + Math.random() * 0.5
  placeItemSound.play()
}
function playHealSound() {
  healSound.currentTime = 0
  healSound.playbackRate = 1 + Math.random() * 0.5
  healSound.play()
}
function playBrewSound() {
  brewSound.currentTime = 0
  brewSound.playbackRate = 1 + Math.random() * 0.5
  brewSound.play()
}
function playCraftSound() {
  craftSound.currentTime = 0
  craftSound.volume = 0.3
  craftSound.playbackRate = 1 + Math.random() * 0.5
  craftSound.play()
}

export function useSound() {
  return {
    playCraftSound,
    playSellSound,
    playMusic,
    playDeathSound,
    playPlaceItemSound,
    playHealSound,
    playBrewSound,
  }
}
