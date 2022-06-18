import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
} from './elements.js'


export default function events(time){


buttonPlay.addEventListener('click',function(){time.countDown()});

buttonPause.addEventListener('click',function(){time.pauseTime()})

buttonAdd.addEventListener('click',function(){time.addTime(),time.pauseTime()})

buttonRemove.addEventListener('click',function(){time.removeTime(),time.pauseTime()})

buttonStop.addEventListener('click',function(){time.clearTime()})


}