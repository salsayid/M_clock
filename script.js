//brainstorming logic for the target date
//it'll be july 1st american central time for me, but july 1st british standard time for her
//she's ahead by +6 hours sheesh

//1. setting target date/time
const targetDate = new Date("2025-07-01T00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0){
        document.getElementById("countdown").innerText = "It's time.";
        return;
    }

    console.log("timeLeft:", timeLeft);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeLeft / (1000 * 60 * 60)  % 24);
    const minutes = Math.floor(timeLeft / (1000 * 60)) % 60;
    const seconds = Math.floor((timeLeft / 1000) % 60);
    const milliseconds = Math.floor(timeLeft % 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("milliseconds").innerText = milliseconds;

}
setInterval(updateCountdown, 10);