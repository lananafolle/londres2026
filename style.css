// =====================
// DATES
// =====================

const departureDate = new Date("2026-11-25T07:35:00");
const startDate = new Date("2026-07-29T00:00:00");

// =====================
// COMPTE À REBOURS + TRAIN
// =====================

function updatePage() {

    const now = new Date();

    // Compte à rebours
    const diff = departureDate - now;
    const countdown = document.getElementById("countdown");

    if (countdown) {

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

    }

    // Train
    const total = departureDate - startDate;
    const elapsed = now - startDate;

    let progress = elapsed / total;

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    const train = document.getElementById("train");

    if (train) {

        const position = 0 + (progress * 82);

        train.style.left = position + "%";

    }

}

updatePage();
setInterval(updatePage, 1000);

// =====================
// SURPRISE
// =====================

const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const enveloppe = document.getElementById("enveloppe");
const messageSurprise = document.getElementById("messageSurprise");

if (surpriseBtn && surprise && enveloppe && messageSurprise) {

    surprise.style.display = "none";
    enveloppe.style.display = "none";
    messageSurprise.style.display = "none";

    surpriseBtn.addEventListener("click", function () {

        surpriseBtn.style.display = "none";

        surprise.style.display = "block";
        enveloppe.style.display = "block";

        setTimeout(function () {

            enveloppe.style.display = "none";
            messageSurprise.style.display = "block";

        }, 1500);

    });

}
