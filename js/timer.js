


export default function time(minutesDisplay,secondsDisplay,endTime){


const endTimeS = endTime
let timerOut
let minutes = Number(minutesDisplay.textContent)
 



function updateDisplay(newMinutes,newSeconds){

minutesDisplay.textContent = String(newMinutes).padStart(2,'0')
secondsDisplay.textContent = String(newSeconds).padStart(2,'0')

}

function addTime(){
  let minutes = Number(minutesDisplay.textContent)
  minutes = minutes + 5;
  updateDisplay(minutes,0)
  
}

function removeTime(){

  let minutes = Number(minutesDisplay.textContent)
  if(minutes < 5){
    minutes = 5
  }
  minutes = minutes - 5;
  updateDisplay(minutes,0)

}

function clearTime(){
updateDisplay(minutes,0)

clearTimeout(timerOut)

}

function pauseTime(){
  clearTimeout(timerOut)
}






function countDown(){


  
timerOut = setTimeout(function(){

  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)
   
  

if(minutes <= 0){
  updateDisplay(0,0)
  endTimeS.play()
  

  return
}

updateDisplay(minutes,0)


if (seconds <= 0){
  seconds = 60
   --minutes
}

 updateDisplay(minutes,String(--seconds));
 
 countDown()

},1000
)






}










return{
  countDown,
  addTime,
  removeTime,
  clearTime,
  pauseTime,
}









}