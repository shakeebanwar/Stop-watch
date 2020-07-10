window.onload = function(){


    var seconds = 00;
    var tens =  00;
    var min = 00; 
    var appendtens = document.getElementById('tens');
    var appendseconds = document.getElementById('seconds');
    var appendminutes = document.getElementById('minutes');
    
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');

    var Interval;
    function startTimer(){
        tens++;
        if(tens < 9){
            appendtens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            appendtens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++;
            appendseconds.innerHTML = "0" + seconds;
            if(seconds > 9){
                appendseconds.innerHTML =  seconds;
            }
            tens = 0;
            appendtens.innerHTML = "0" + tens;
             if(seconds > 10){
                 min++ ;
                 appendminutes.innerHTML = min;
                 seconds = 0;

             }

        }
    }

    //button to start the timer

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10)
    }


    //clear the time

    buttonStop.onclick = function(){
        clearInterval(Interval)
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00"
        seconds = "00"
        min = "00"
        appendtens.innerHTML = tens;
        appendseconds.innerHTML = seconds
        appendminutes.innerHTML = min
    }
}