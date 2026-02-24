document.addEventListener("DOMContentLoaded", function() {

    const coldBtn = document.getElementById("coldBtn");
    const warmBtn = document.getElementById("warmBtn");

    if (coldBtn) {
        coldBtn.addEventListener("click", function() {
            window.location.href = "seattle.html";
        });
    }

    if (warmBtn) {
        warmBtn.addEventListener("click", function() {
            window.location.href = "sanjuan.html";
        });
    }

});