let myInterval;
let state = 0;

function timer() {
    const h1 = document.querySelector("h1#timer");
    let [hour, minute, sec] = h1.innerText.split(":");
    if (Number(sec) < 59) {
        sec = Number(sec) + 1 + '';
    } else {
        sec = "00";
        if (Number(minute) < 59) {
            minute = Number(minute) + 1 + '';
        } else {
            minute = "00";
            if (hour < 23) {
                hour = Number(hour) + 1 + '';
            } else {
                hour = "00";
            }
        }
    }
    h1.innerText = adjust(hour) + ":" + adjust(minute) + ":" + adjust(sec);
}

function adjust(a) {
    return a.length < 2 ? "0" + a : a;
}

function stop() {
    if (state === 1) {
        clearInterval(myInterval);
        state--;
    }

}

function start() {
    if (state === 0) {
        myInterval = setInterval(timer);
        state++;
    }
}

function reset() {
    if (state === 1) {
        stop();
    }
    const h1 = document.querySelector("h1#timer");
    h1.innerText = "00:00:00";
}