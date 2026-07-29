// ===============================
// DATE DU DÉPART
// ===============================

const departureDate = new Date("2026-11-25T07:35:00");

// Date de début de la progression (aujourd'hui)
const startDate = new Date("2026-07-29T00:00:00");

// ===============================
// MISE À JOUR
// ===============================

function updatePage() {

    const now = new Date();

    // ----- Compte à rebours -----
    const diff = departureDate - now;

    const countdown = document.getElementById("countdown");

    if (diff > 0) {

        const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
        const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((diff % (1000 * 60)) / 1000);

        countdown.innerHTML =
            ${jours} jours • ${heures} h • ${minutes} min • ${secondes} s;

    } else {

        countdown.innerHTML = "🚄 C'est le départ !";

    }

    // ----- Position du train -----

    const total = departureDate - startDate;
    const elapsed = now - startDate;

    let progress = elapsed / total;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const train = document.getElementById("train");

    if (train) {

        train.style.left = (progress * 78) + "%";

    }

}

// Première mise à jour
updatePage();

// Mise à jour du compte à rebours
setInterval(updatePage, 1000);


// ===============================
// SURPRISE
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

if (surpriseBtn && surprise) {

    surpriseBtn.addEventListener("click", () => {

        surpriseBtn.style.display = "none";
        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    });

}
