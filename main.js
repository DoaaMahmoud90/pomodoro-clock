const buttons = document.getElementsByTagName('button');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');
let breakInterval = document.getElementById('break-interval');
let workInterval = document.getElementById('work-interval');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const timerDiv =document.getElementById('timer-div');
const currentInterval = document.getElementById('current-interval');
const cycles = document.getElementById('cycles');
let startEnabled = false;
let breakEnabled = false;
let interval;
let goOn = true;
for(let i=0; i <buttons.length; i++){
  const btn = buttons[i];
  btn.addEventListener('click', function (){
    switch(btn.getAttribute('id')){
      case 'subtraction-break':
          breakInterval.innerText --;
          break;
      case 'subtraction-work':
          workInterval.innerText --;
          break;
      case 'addition-break':
          breakInterval.innerText ++;
          break;    
      case 'addition-work':
          workInterval.innerText ++;
          break;
  } });
    
}

start.addEventListener('click', function(){
  startEnabled = true;
  minutes.innerText = workInterval.innerText;
  currentInterval.innerText = 'Work Interval';
  interval = setInterval(timer, 1000);
})

function timer(){
  if(seconds.innerText != 0 ){
    seconds.innerText --;
  }
  else if(minutes.innerText != 0 && seconds.innerText == 0){
    seconds.innerText = 59;
    minutes.innerText --;
  }
  
  if(minutes.innerText == 0 && seconds.innerText == 0 && startEnabled && !breakEnabled){
    breakEnabled = true;
    currentInterval.innerText = 'Break Interval';
    minutes.innerText = breakInterval.innerText;
    if(seconds.innerText != 0 ){
      seconds.innerText --;
    }
    else if(minutes.innerText != 0 && seconds.innerText == 0){
      seconds.innerText = 59;
      minutes.innerText --;
    }
  }

  if(minutes.innerText == 0 && seconds.innerText == 0 &&startEnabled && breakEnabled && goOn){
    goOn = false;
    cycles.innerText ++;
    minutes.innerText = 00;
    seconds.innerText = 00;
    currentInterval.innerText = '';
  }
}

reset.addEventListener('click', function (){
minutes.innerText = 00;
seconds.innerText = 00;
currentInterval.innerText = '';
startEnabled = false;
cycles.innerText = 0;
});


pause.addEventListener('click', function(){
  clearInterval(interval);
})