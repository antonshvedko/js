let el = document.querySelector('h2');

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

    el.innerHTML = `${hours}:${min}:${sec}`;
}

let dfaultСlock = setInterval(clock, 1000);

let stopClock = document.querySelector('.stop');
stopClock.addEventListener("click", () => clearInterval(dfaultСlock));

let startClock = document.querySelector('.start');
startClock.addEventListener("click", () => {dfaultСlock = setInterval(clock, 1000);});