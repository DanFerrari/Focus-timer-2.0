import { volForest,
  volRain,
  volCoffee,
  volFireplace,} from './elements.js'



export default function sounds(forest,rain,coffee,fireplace,forestSound,rainSound,coffeeSound,fireplaceSound)


{
  const body = document.querySelector('body')
  
volForest.value = 0
volRain.value = 0
volCoffee.value = 0
volFireplace.value = 0

function updateVol(volItem){
  let vol = volItem.value;
  let volUpdate = vol/100
  return volUpdate
}

function VolumeSound(event,sound,vol){
  vol.addEventListener('mousemove',function(){
      
    if(event.classList.contains('check') == false){
      sound.pause()
      vol.value = 0
     return
    } 
    sound.volume = updateVol(vol)
    sound.play()

    sound.loop = true

})
 }


    forest.addEventListener('click',function change(){
      const ft = forest.classList.toggle('check')
      const wr = body.classList.toggle('input-A')


      volForest.value = 50
      forestSound.volume = updateVol(volForest)
     forestSound.play() 
      
      
     forestSound.volume = updateVol(volForest)

      if(ft == false){
        forestSound.pause()
        volForest.value = 0
       return
      }
     
      forestSound.loop = true

      VolumeSound(forest,forestSound,volForest)
   



    })

    rain.addEventListener('click',function change(){
       const rn = rain.classList.toggle('check')
       const wr = body.classList.toggle('input-B')
       volRain.value = 50
       rainSound.volume = updateVol(volRain)
      rainSound.play() 
      

      if(rn == false){
        rainSound.pause()
        volRain.value = 0
        return
      }

      rainSound.loop = true
     
      VolumeSound(rain,rainSound,volRain)
      

    })


    coffee.addEventListener('click',function change(){
      const cf = coffee.classList.toggle('check')
      const wr = body.classList.toggle('input-C')
      volCoffee.value = 50
      coffeeSound.volume = updateVol(volCoffee)
      coffeeSound.play()  

      if(cf == false){
        coffeeSound.pause()
        volCoffee.value = 0
        return
      }


      coffeeSound.loop = true

      VolumeSound(coffee,coffeeSound,volCoffee)


    })




    fireplace.addEventListener('click',function change(){
      const fp = fireplace.classList.toggle('check')
      const wr = body.classList.toggle('input-D')
      volFireplace.value = 50
      fireplaceSound.volume = updateVol(volFireplace)
      fireplaceSound.play()  

      if(fp == false){
        fireplaceSound.pause()
        volFireplace.value = 0
        return

      }

      fireplaceSound.loop = true

      VolumeSound(fireplace,fireplaceSound,volFireplace)
    })

    
 



 
}