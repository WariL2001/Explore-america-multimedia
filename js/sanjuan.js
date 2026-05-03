document.addEventListener("DOMContentLoaded", function () {

    const showSJFactsBtn = document.getElementById("showSJFactsBtn");
    const sjFactsContainer = document.getElementById("sjFactsContainer");

    if (!showSJFactsBtn) return;

    const facts = [
        "San Juan was founded in 1521, making it one of the oldest European-established cities in the Americas.",
        "Puerto Rico's national symbol is the coquí, a tiny tree frog whose song fills the night air — and can only survive on the island.",
        "Old San Juan's cobblestones are actually blue-grey ballast blocks brought over on 16th-century Spanish ships.",
        "El Yunque, outside San Juan, is the only tropical rainforest in the U.S. National Forest system.",
        "San Juan averages over 300 sunny days per year and never drops below 60°F."
    ];

    showSJFactsBtn.addEventListener("click", function () {
        if (sjFactsContainer.innerHTML !== "") {
            sjFactsContainer.innerHTML = "";
            showSJFactsBtn.textContent = "Show Fun Facts";
            showSJFactsBtn.setAttribute("aria-expanded", "false");
            return;
        }

        facts.forEach(function (fact) {
            const p = document.createElement("p");
            p.textContent = "• " + fact;
            p.style.marginTop = "8px";
            sjFactsContainer.appendChild(p);
        });

        showSJFactsBtn.textContent = "Hide Fun Facts";
        showSJFactsBtn.setAttribute("aria-expanded", "true");
    });

});
