let countDown = 0;
let timeInterval = 0;

const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');
const savedTime = localStorage.getItem('countDown') || false;

if (savedTime) {
    startClock(savedTime);

    let dated = new Date(savedTime);
    endDate.valueAsDate = dated;
}

function timeRemaining(endTime) {
    let t = Date.parse(new Date(endTime)) - Date.parse(new Date());

    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function startClock(endTime) {
    function updateCounter() {
        let t = timeRemaining(endTime);
        console.log(t);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            console.log('Time Complete');
        }
    }

    updateCounter();
    timeInterval = setInterval(updateCounter, 1000);
}

function clearTimer() {

    daysSpan.innerHTML = 0;
    hoursSpan.innerHTML = 0;
    minutesSpan.innerHTML = 0;
    secondsSpan.innerHTML = 0;

    countDown = 0;
    localStorage.setItem('countDown', false);

    console.log('Timer reseted');
}

endDate.addEventListener('change', function (e) {
    e.preventDefault();
    clearInterval(timeInterval);
    const newValue = this.value;

    clearTimer();
    if (newValue) {
        const endDateTemp = new Date(newValue);
        localStorage.setItem('countDown', endDateTemp);
        startClock(endDateTemp);
    }
})
