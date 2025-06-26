//brainstorming logic for the target date
//it'll be july 1st american central time for me, but july 1st british standard time for her
//she's ahead by +6 hours sheesh

//1. setting target date/time


//after receiving some delightful info, i now get to move the time up by 2 whole days (devil face emoji)
const targetDate = new Date("2025-06-28T00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0){
        document.getElementById("countdown").innerText = "IT'S TIME.";
        triggerCrazyEffect();
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


//confetti code muahahahahah
function triggerCrazyEffect() {
    if (!window.confetti) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
        script.onload = () => {
            window.confetti && window.confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 }
            });
            document.body.classList.add('crazy-shake');
            setTimeout(() => document.body.classList.remove('crazy-shake'), 1000);
        };
        document.body.appendChild(script);
    } else {
        window.confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });
        document.body.classList.add('crazy-shake');
        setTimeout(() => document.body.classList.remove('crazy-shake'), 1000);
    }
}