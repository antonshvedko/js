let h2 = document.createElement("h2");
document.querySelector("body").appendChild(h2);
h2.textContent = '00:00:00';

let startBtn = document.createElement("button");
document.querySelector("body").appendChild(startBtn);
startBtn.textContent = "start";
startBtn.classList.add("start");

let stopBtn = document.createElement("button");
document.querySelector("body").appendChild(stopBtn);
stopBtn.textContent = "stop";
stopBtn.classList.add("stop");

let clock = () => {
    let theBigDay = new Date(),
        hours = theBigDay.getHours(), 
        min = theBigDay.getMinutes(),
        sec = theBigDay.getSeconds();

        if (hours <= 9) {
            hours = '0' + hours;
        } else if (min <= 9) {
            min = '0' + min;
        } else if (sec <= 9) {
            sec = '0' + sec;
        }

    h2.textContent = `${hours}:${min}:${sec}`;
}

let dfaultСlock = setInterval(clock, 1000);

let stopClock = document.querySelector('.stop');
stopClock.addEventListener("click", () => clearInterval(dfaultСlock));

let startClock = document.querySelector('.start');
startClock.addEventListener("click", () => {dfaultСlock = setInterval(clock, 1000);});