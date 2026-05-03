document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");
 
    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    const skipLink = document.getElementById("skip-link");
    if (skipLink) {
        skipLink.addEventListener("click", function (e) {
            e.preventDefault();
            const main = document.querySelector("main");
            if (main) {
                main.setAttribute("tabindex", "-1");
                main.focus();
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    document.querySelectorAll('a[href="seattle.html"]').forEach(function (link) {
        link.addEventListener("click", function () {
            sessionStorage.setItem("autoplaySeattle", "1");
        });
    });
 
});