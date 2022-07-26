var min = 2;
var sec = 0;

function startTimer(){
    countdown()
    document.getElementById('startB').disabled = true;
    
}

function countdown(){
    setInterval(function(){
        sec -= 1;
        if (sec <= 0){
            min -= 1;
            sec = 60
        }
        if (min < 0){
            countdownFinished()
            
        }
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
    }, 1000);   
}

function countdownFinished(){
    min = '--';
    sec = '--';
}