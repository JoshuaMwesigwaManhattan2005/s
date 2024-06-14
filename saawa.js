const display = document.setElementById("display")
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textcontent = "00:00:00:00";
}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = string(hours).padstart(2, "0");
    minutes = string(minutes).padstart(2, "0");
    seconds = string(seconds).padstart(2, "0");
    milliseconds = string(milliseconds).padstart(2, "0");

    display.textcontent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}