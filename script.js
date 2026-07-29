// =======================
// COMPTE À REBOURS
// =======================

const departureDate = new Date("2026-11-25T07:35:00");

function updatePage() {

    const now = new Date();

    const totalDays = Math.ceil(
        (departureDate - new Date("2025-11-25")) / (1000*60*60*24)
    );

    const remainingDays = Math.max(0,
        Math.ceil((departureDate - now)/(1000*60*60*24))
    );

    // Compte à rebours
    const diff = departureDate - now;

    if(diff > 0){

        const d = Math.floor(diff/(1000*60*60*24));
        const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
        const m = Math.floor((diff%(1000*60*60))/(1000*60));
        const s = Math.floor((diff%(1000*60))/1000);

        document.getElementById("countdown").innerHTML =
        ${d} jours • ${h} h • ${m} min • ${s} s;

    }else{

        document.getElementById("countdown").innerHTML =
        "🚄 C'est le départ !";

    }

    // Position du train
    const progress = 1 - (remainingDays / totalDays);

    const train = document.getElementById("train");

    if(train){
        train.style.left = (progress * 85) + "%";
    }

}

updatePage();
setInterval(updatePage,1000);


// =======================
// SURPRISE
// =======================

const btn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

btn.addEventListener("click",function(){

    btn.style.display="none";
    surprise.style.display="block";

});
