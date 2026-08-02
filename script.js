// =====================
// DATES
// =====================

const departureDate = new Date("2026-11-25T07:35:00");

// Date de début de la progression du train
const startDate = new Date("2026-07-29T00:00:00");

// =====================
// MISE À JOUR
// =====================

function updatePage() {

    const now = new Date();

    // ===== Compte à rebours =====

    const diff = departureDate - now;

    const countdown = document.getElementById("countdown");

    if (diff > 0) {

        const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
        const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondes = Math.floor((diff % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <div class="count-box">
                <span>${jours}</span>
                <small>Jours</small>
            </div>

            <div class="count-box">
                <span>${heures}</span>
                <small>Heures</small>
            </div>

            <div class="count-box">
                <span>${minutes}</span>
                <small>Minutes</small>
            </div>

            <div class="count-box">
                <span>${secondes}</span>
                <small>Secondes</small>
            </div>
        `;

    } else {

        countdown.innerHTML = "<h2>🚄 C'est le grand départ ! 🇬🇧</h2>";

    }

    // ===== Position du train =====

    const total = departureDate - startDate;
    const elapsed = now - startDate;

    let progress = elapsed / total;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const train = document.getElementById("train");

    if (train) {

        // Départ à 5 % et arrivée à 83 %
        const position = 5 + (progress * 78);

        train.style.left = position + "%";

    }

}

// Première mise à jour
updatePage();

// Mise à jour chaque seconde
setInterval(updatePage, 1000);

// =====================
// CADEAU
// =====================

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

if (surpriseBtn && surprise) {

    surpriseBtn.addEventListener("click", function () {

        surpriseBtn.style.display = "none";
        surprise.style.display = "block";

        surprise.scrollIntoView({
            behavior: "smooth"
        });

    });

}
