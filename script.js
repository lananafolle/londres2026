const departureDate = new Date("2026-11-25T08:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = departureDate - now;

    const countdown = document.getElementById("countdown");
    const train = document.getElementById("train");
    const arrival = document.getElementById("arrivalMessage");

    if (diff <= 0) {
        countdown.innerHTML = "🚄 C'est le grand départ !";
        train.style.left = "95%";
        arrival.innerHTML =
            "🎉 Ding Dong... Bienvenue en gare de Londres St Pancras ! 🇬🇧";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdown.innerHTML =
        days + " jours " + hours + " h " + minutes + " min";

    const totalDays = 365;
    const progress = Math.min((365 - days) / totalDays, 1);

    train.style.left = (progress * 95) + "%";
}

updateCountdown();
setInterval(updateCountdown, 60000);
