document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!validateForm()) return;

        form.style.display = "none";
        successMsg.style.display = "block";

        setTimeout(function () {
            form.reset();
            clearErrors();
            form.style.display = "flex";
            successMsg.style.display = "none";
        }, 4000);
    });

    function validateForm() {
        var valid = true;

        var name = document.getElementById("contactName");
        var nameError = document.getElementById("nameError");
        if (!name.value.trim()) {
            nameError.style.display = "block";
            valid = false;
        } else {
            nameError.style.display = "none";
        }

        var email = document.getElementById("contactEmail");
        var emailError = document.getElementById("emailError");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            emailError.style.display = "block";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        var subject = document.getElementById("contactSubject");
        var subjectError = document.getElementById("subjectError");
        if (!subject.value) {
            subjectError.style.display = "block";
            valid = false;
        } else {
            subjectError.style.display = "none";
        }

        var message = document.getElementById("contactMessage");
        var messageError = document.getElementById("messageError");
        if (!message.value.trim()) {
            messageError.style.display = "block";
            valid = false;
        } else {
            messageError.style.display = "none";
        }

        return valid;
    }

    function clearErrors() {
        ["nameError", "emailError", "subjectError", "messageError"].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.style.display = "none";
        });
    }

});
