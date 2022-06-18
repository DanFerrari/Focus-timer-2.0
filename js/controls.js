

import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonAdd,
  buttonRemove,
  buttonSun,
  buttonMoon,
} from './elements.js'


export default function control(){

buttonPause.addEventListener('click',function(){

buttonPause.classList.toggle('hide')
buttonPlay.classList.toggle('hide')


})
buttonPlay.addEventListener('click',function(){

  buttonPlay.classList.toggle('hide')
  buttonPause.classList.toggle('hide')
  
  })

buttonStop.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})
buttonAdd.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})
buttonRemove.addEventListener('click',function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})


buttonSun.addEventListener('click',function(){
document.querySelector('body').classList.toggle('darkmod')

buttonSun.classList.toggle('hide')
buttonMoon.classList.toggle('hide')
})

buttonMoon.addEventListener('click',function(){
  document.querySelector('body').classList.toggle('darkmod')
  
  buttonSun.classList.toggle('hide')
  buttonMoon.classList.toggle('hide')
  })



}