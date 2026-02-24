document.addEventListener("DOMContentLoaded", function() {

    const showFactsBtn = document.getElementById("showFactsBtn");
    const factsContainer = document.getElementById("factsContainer");

    if (showFactsBtn) {
        showFactsBtn.addEventListener("click", function() {

            const facts = [
                "Seattle is home to the first Starbucks.",
                "The Space Needle was built for the 1962 World’s Fair.",
                "Seattle has over 150 rainy days per year."
            ];

            factsContainer.innerHTML = "";

            facts.forEach(fact => {
                const p = document.createElement("p");
                p.textContent = fact;
                factsContainer.appendChild(p);
            });

        });
    }

});