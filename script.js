// ===============================
// COMPTE À REBOURS
// ===============================

const targetDate = new Date("2026-11-25T07:35:00").getTime();

function updateCountdown() {
    const countdown = document.getElementById("countdown");
    if (!countdown) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        countdown.innerHTML = "🚄 C'est le départ !";
        return;
    }

    const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        `${jours} jours • ${heures} h • ${minutes} min • ${secondes} s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ===============================
// SURPRISE
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

if (surpriseBtn && surprise) {

    surpriseBtn.addEventListener("click", function () {

        surprise.style.display = "block";
        surpriseBtn.style.display = "none";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    });

}
