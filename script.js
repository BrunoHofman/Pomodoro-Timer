var min = 25;
var sec = 60;
var startB = document.getElementById("startB");

function startTimer(){


    window.setInterval(countdown(), 1000);
}

function countdown(){
    while (min > 0){
        sec -= 1;
        document.getElementById("minutes").innerHTML = min;
        document.getElementById("seconds").innerHTML = sec;
    }

    
}