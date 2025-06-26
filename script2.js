//ok now ima just speedrun this ridiculous english time. oy bruv you get me????

const targetDateBrit = new Date("2025-06-27T18:00:00-05:00").getTime();

function updateCountdown2() {
  const now = new Date().getTime();
  const timeLeft = targetDateBrit - now;

  console.log("elements check:",
    document.getElementById("days2"),
    document.getElementById("hours2"),
    document.getElementById("minutes2"),
    document.getElementById("seconds2")
  );

  if (timeLeft <= 0) {
    const countdownBox = document.getElementById("countdown2");
    if (countdownBox) countdownBox.innerText = "It's time.";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  const d = document.getElementById("days2");
  const h = document.getElementById("hours2");
  const m = document.getElementById("minutes2");
  const s = document.getElementById("seconds2");

  if (d && h && m && s) {
    d.innerText = days;
    h.innerText = hours;
    m.innerText = minutes;
    s.innerText = seconds;
  } else {
    console.error("sums wrong gang");
  }
}

setInterval(updateCountdown2, 1000);
