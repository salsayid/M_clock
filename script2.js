//ok now ima just speedrun this ridiculous english time. oy bruv you get me????


const targetDateBrit = new Date("2025-06-30T18:00:00-5:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0){
        document.getElemenyById("countdown").innerText = "It's time.";
        return;
    }

    console.log("timeLeft:", timeLeft);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)  % 24);
    const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
    const seconds = Math.floor(timeLeft / (1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
