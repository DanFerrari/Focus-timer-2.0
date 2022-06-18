import {buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
  buttonSun,
  buttonMoon,
  volForest,
  volRain,
  volCoffee,
  volFireplace,
  forestAudio,
  rainAudio,
  coffeeAudio,
  fireplaceAudio,
  endTime} from './elements.js'

import sounds from './sound.js'
import time from './timer.js'
import control from './controls.js'
import events from './events.js'


const sons = sounds(buttonForest,buttonRain,buttonCoffee,buttonFireplace,forestAudio,rainAudio,coffeeAudio,fireplaceAudio,)

const timer = time(minutesDisplay,secondsDisplay,endTime)


const Control = control()

const Events = events(timer)