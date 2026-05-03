document.addEventListener("DOMContentLoaded", function () {
 
    const coldBtn = document.getElementById("coldBtn");
    const warmBtn = document.getElementById("warmBtn");
    const recommendationBox = document.getElementById("recommendationBox");

    function showRecommendation(city, description, url) {
        if (recommendationBox) {
            recommendationBox.hidden = false;
            recommendationBox.innerHTML =
                "<strong>We recommend: " + city + "</strong>" +
                "<p>" + description + "</p>" +
                "<a href='" + url + "' class='rec-link'>Explore " + city + " →</a>";
        }
        // Redirect after a short delay so user sees the recommendation
        setTimeout(function () {
            window.location.href = url;
        }, 1800);
    }
 
    if (coldBtn) {
        coldBtn.addEventListener("click", function () {
            sessionStorage.setItem("autoplaySeattle", "1");
            showRecommendation(
                "Seattle, WA",
                "A vibrant Pacific Northwest city known for coffee, the Space Needle, and stunning mountain views.",
                "seattle.html"
            );
        });
    }
 
    if (warmBtn) {
        warmBtn.addEventListener("click", function () {
            showRecommendation(
                "San Juan, PR",
                "A tropical Caribbean gem with colorful colonial architecture, white sand beaches, and rich culture.",
                "sanjuan.html"
            );
        });
    }
 
});