var ramadanDate = new Date("March 1, 2025 00:00:00").getTime();
function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = ramadanDate - now;

    if (timeLeft > 0) {
        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;

    } else {
        document.getElementById("countdown").innerHTML = "<h2>Ramadan Mubarak! 🎉</h2>";
    }
}

updateCountdown();
