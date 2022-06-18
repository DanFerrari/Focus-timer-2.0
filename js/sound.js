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



function mouseVol(volItem,Sound){


  volItem.addEventListener('mousemove',function(){
    
    
    Sound.volume = updateVol(volItem)
    Sound.pause()
    Sound.play() 
    
    
    
    
  })

}








    forest.addEventListener('click',function change(){
      const ft = forest.classList.toggle('check')
      const wr = body.classList.toggle('input-A')

      


      volForest.value = 50
      
      mouseVol(volForest,forestSound)
      forestSound.volume = updateVol(volForest)
      


      if(ft == false){
        forestSound.pause()
        volForest.value = 0
       return
      }
     


     
     forestSound.play() 
      
      forestSound.loop = true

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

     
      mouseVol(volRain,rainSound)
      

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

      mouseVol(volCoffee,coffeeSound)



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

      mouseVol(volFireplace,fireplaceSound)
    })

    
 
    
  



 
}