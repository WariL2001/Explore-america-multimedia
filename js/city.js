// city.js — Seattle page interactivity

document.addEventListener("DOMContentLoaded", function () {

    const seattleAudio = document.getElementById("seattleAudio");
    if (seattleAudio) {
        seattleAudio.volume = 0.5;
        if (sessionStorage.getItem("autoplaySeattle")) {
            sessionStorage.removeItem("autoplaySeattle");
            seattleAudio.play().catch(function () {});
        }
    }
 
    const showFactsBtn = document.getElementById("showFactsBtn");
    const factsContainer = document.getElementById("factsContainer");
 
    if (showFactsBtn) {
        showFactsBtn.addEventListener("click", function () {
 
            const facts = [
                "Seattle is home to the first Starbucks, opened in 1971 at Pike Place Market.",
                "The Space Needle was built for the 1962 World's Fair and stands 605 feet tall.",
                "Seattle receives an average of 152 rainy days per year — but less annual rainfall than New York City.",
                "Amazon was founded in Seattle in 1994 by Jeff Bezos.",
                "Seattle is nicknamed 'The Emerald City' for its lush evergreen forests."
            ];
 
            // Toggle behavior — show or hide facts
            if (factsContainer.innerHTML !== "") {
                factsContainer.innerHTML = "";
                showFactsBtn.textContent = "Show Fun Facts";
                showFactsBtn.setAttribute("aria-expanded", "false");
                return;
            }
 
            facts.forEach(function (fact) {
                const p = document.createElement("p");
                p.textContent = "• " + fact;
                p.style.marginTop = "8px";
                factsContainer.appendChild(p);
            });
 
            showFactsBtn.textContent = "Hide Fun Facts";
            showFactsBtn.setAttribute("aria-expanded", "true");
        });
    }
 
});
 