var hours =  0;
var min = 0;
var sec = 0;
// var lapContainer = document.getElementById('laps')
var intervel;
var btn = document.getElementById('startBtn');
function stopWatch(){
    sec++;
    document.getElementById('sec').innerHTML = sec;
    if (sec >= 60) {
        min++;
        document.getElementById('min').innerHTML = min;
        sec = 0;
    } else if (min >= 60) {
        hours++;
        document.getElementById('hours').innerHTML = hours;
        min = 0;
    }
}
function startWatch () {
    if (!intervel) {
        intervel = setInterval(stopWatch,1000);
    }
}
function pauseWatch (){
    clearInterval(intervel);
    intervel = false;
}
function resetWatch (){ 
    hours = 0 + "0";
    min = 0 + "0";
    sec = 0 + "0";
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('min').innerHTML = min;
    document.getElementById('hours').innerHTML = hours;
    clearInterval(intervel);
    lapContainer.innerHTML = '';
    intervel = false;
}
// function laps() {
//     if(intervel) {
//         var li = document.createElement('li');
//         li.innerText = stopWatch();
//         lapContainer.append(li);
//     }
// }