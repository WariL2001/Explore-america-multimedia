document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("plannerForm");
    const formWrap = document.getElementById("plannerFormWrap");
    const output = document.getElementById("itineraryOutput");
    const itineraryTitle = document.getElementById("itineraryTitle");
    const itineraryDays = document.getElementById("itineraryDays");
    const budgetTip = document.getElementById("budgetTip");
    const resetBtn = document.getElementById("resetBtn");

    if (!form) return;

    const activities = {
        seattle: {
            food: [
                "Visit the original Starbucks at Pike Place Market",
                "Try fresh Dungeness crab at Pike Place Fish Market",
                "Explore the Capitol Hill restaurant scene",
                "Coffee tasting tour through Seattle's local roasters",
                "Award-winning clam chowder at Pike Place Chowder"
            ],
            nature: [
                "Hike Discovery Park with views of Puget Sound",
                "Take a Washington State Ferry across the Sound",
                "Stroll through the Washington Park Arboretum",
                "Day trip to Mount Rainier National Park",
                "Explore the tide pools at Olympic National Park"
            ],
            culture: [
                "Visit the Museum of Pop Culture (MoPOP)",
                "Explore the Seattle Art Museum (SAM)",
                "Tour Chihuly Garden and Glass",
                "Walk through historic Pioneer Square",
                "Visit the Wing Luke Museum of Asian Pacific American Experience"
            ],
            nightlife: [
                "Live music night in Capitol Hill",
                "Bar hop along Pine Street",
                "Jazz at Tula's Restaurant & Jazz Club",
                "Comedy show at Laugh's Comedy Spot",
                "Rooftop drinks at a downtown hotel bar"
            ],
            shopping: [
                "Browse artisan stalls at Pike Place Market",
                "Shop vintage at Fremont Sunday Market",
                "Explore Pioneer Square art galleries",
                "Boutique shopping on Capitol Hill",
                "Visit Pacific Place downtown mall"
            ]
        },
        sanjuan: {
            food: [
                "Try mofongo at a traditional Old San Juan restaurant",
                "Explore La Placita de Santurce food market",
                "Sample fresh piraguas (shaved ice) street-side",
                "Fresh seafood dinner in Condado",
                "Taste authentic lechón along La Ruta del Lechón"
            ],
            nature: [
                "Day trip to El Yunque Rainforest",
                "Relax on the white sands of Condado Beach",
                "Snorkeling at Isla Verde",
                "Bioluminescent bay kayak tour at Laguna Grande",
                "Kayaking in Condado Lagoon at sunset"
            ],
            culture: [
                "Tour Castillo San Felipe del Morro",
                "Walk the cobblestone streets of Old San Juan",
                "Visit the Museum of Art of Puerto Rico",
                "Explore Casa Blanca, the oldest residence in Puerto Rico",
                "Attend a live salsa performance in the old city"
            ],
            nightlife: [
                "Dance salsa at La Placita de Santurce",
                "Rooftop cocktails in Condado",
                "Night photography tour of Old San Juan's lit forts",
                "Beach bonfire at Isla Verde",
                "Live reggaeton night at a Condado club"
            ],
            shopping: [
                "Browse handmade crafts and art in Old San Juan",
                "Shop local boutiques on Calle Loíza",
                "Explore the Miramar design district",
                "Pick up local coffee and rum at Plaza Las Américas",
                "Find unique prints at San Juan art galleries"
            ]
        }
    };

    const budgetTips = {
        budget: {
            seattle: "Budget tip: The Link Light Rail from the airport costs ~$3. Many parks and viewpoints are free. Look for free museum days and stay in Capitol Hill hostels for the best value.",
            sanjuan: "Budget tip: Use the Tren Urbano metro for local travel. Beaches are free. Street food and local fondas are delicious and affordable. Old San Juan guesthouses beat big hotels on price."
        },
        moderate: {
            seattle: "Moderate tip: The Seattle CityPASS bundles top museum admissions. Rent a bike to explore the waterfront. Mid-range hotels in Belltown put you close to everything.",
            sanjuan: "Moderate tip: Book a hotel in Condado for beach access. Day tour packages to El Yunque run $50–$80. Santurce restaurants offer excellent food at mid-range prices."
        },
        luxury: {
            seattle: "Luxury tip: Stay at the Four Seasons or Fairmont Olympic. Book a private Space Needle dinner. Dine at Canlis or The Herbfarm for world-class Pacific Northwest cuisine.",
            sanjuan: "Luxury tip: Stay at the El San Juan Hotel or AC Hotel Condado. Book a private bioluminescent bay tour. Dine at Santaella or Marmalade for upscale Puerto Rican cuisine."
        }
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validateForm()) return;

        const name = document.getElementById("travelerName").value.trim() || "Traveler";
        const dest = document.getElementById("destination").value;
        const days = parseInt(document.getElementById("numDays").value);
        const budget = document.getElementById("budget").value;
        const interests = Array.from(
            document.querySelectorAll('input[name="interests"]:checked')
        ).map(function (cb) { return cb.value; });

        generateItinerary(name, dest, days, budget, interests);
    });

    resetBtn.addEventListener("click", function () {
        output.hidden = true;
        formWrap.hidden = false;
        form.reset();
        clearErrors();
        formWrap.scrollIntoView({ behavior: "smooth" });
    });

    function validateForm() {
        var valid = true;

        var dest = document.getElementById("destination");
        var destError = document.getElementById("destError");
        if (!dest.value) {
            destError.style.display = "block";
            valid = false;
        } else {
            destError.style.display = "none";
        }

        var days = document.getElementById("numDays");
        var daysError = document.getElementById("daysError");
        var daysVal = parseInt(days.value);
        if (!days.value || isNaN(daysVal) || daysVal < 1 || daysVal > 7) {
            daysError.style.display = "block";
            valid = false;
        } else {
            daysError.style.display = "none";
        }

        var budget = document.getElementById("budget");
        var budgetError = document.getElementById("budgetError");
        if (!budget.value) {
            budgetError.style.display = "block";
            valid = false;
        } else {
            budgetError.style.display = "none";
        }

        return valid;
    }

    function clearErrors() {
        ["destError", "daysError", "budgetError"].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
    }

    function generateItinerary(name, dest, days, budget, interests) {
        var cityName = dest === "seattle" ? "Seattle, WA" : "San Juan, PR";

        var selectedInterests = interests.length > 0
            ? interests
            : Object.keys(activities[dest]);

        var pool = [];
        selectedInterests.forEach(function (interest) {
            if (activities[dest][interest]) {
                pool = pool.concat(activities[dest][interest]);
            }
        });

        itineraryTitle.textContent = name + "’s " + days + "-Day " + cityName + " Itinerary";
        itineraryDays.innerHTML = "";

        for (var day = 1; day <= days; day++) {
            var dayDiv = document.createElement("div");
            dayDiv.className = "itinerary-day";

            var items = [];
            for (var i = 0; i < 3; i++) {
                items.push(pool[((day - 1) * 3 + i) % pool.length]);
            }

            var listItems = items.map(function (a) {
                return "<li>" + a + "</li>";
            }).join("");

            dayDiv.innerHTML = "<h4>Day " + day + "</h4><ul>" + listItems + "</ul>";
            itineraryDays.appendChild(dayDiv);
        }

        budgetTip.textContent = budgetTips[budget][dest];
        formWrap.hidden = true;
        output.hidden = false;
        output.scrollIntoView({ behavior: "smooth" });
    }

});
