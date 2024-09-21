let timerEl = document.getElementById("timer");


let countDown = 10;

let intervalId = setInterval(function() {
    countDown = countDown - 1;
    timerEl.textContent = countDown;
    if (countDown === 0) {
        timerEl.textContent = "BOOM!!!!";
        clearInterval(intervalId);
    }
}, 1000)

let defuserEl = document.getElementById("defuser");

defuserEl.addEventListener("keydown", function(event) {
    let defuserText = defuserEl.value;

    if (event.key === "Enter" && defuserText === "defuse" && countDown !== 0) {
        timerEl.textContent = "Yah you did it....";
        clearInterval(intervalId);
    }
})