// ===== Compte à rebours =====
const targetDate = new Date("2026-11-25T07:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "🚄 C'est le départ !";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        ${days} jours • ${hours} h • ${minutes} min • ${seconds} sec;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// ===== Bouton surprise =====
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", function () {

    surprise.style.display = "block";

    surpriseBtn.style.display = "none";

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

});
