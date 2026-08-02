// =====================
// DATES
// =====================

const departureDate = new Date("2026-11-25T07:35:00");
const startDate = new Date("2026-07-29T00:00:00");

// =====================
// MISE À JOUR
// =====================

function updatePage() {

    const now = new Date();

    // ===== COMPTE À REBOURS =====

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

            countdown.innerHTML = "<h2>🚄 C'est le grand départ ! 🇬🇧</h
