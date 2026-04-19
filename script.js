// script.js

function checkPass() {
    const password = document.getElementById("pass").value;
    const hidden = document.getElementById("hidden");

    if (password === "7879") {
        hidden.style.display = "block";

        hidden.scrollIntoView({
            behavior: "smooth"
        });

        alert("✨ Surprise Unlocked ✨");
    } else {
        alert("❌ Wrong Password");
    }
}

/* Smooth Fade In Sections */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease";
    observer.observe(section);
});

/* Welcome Console Message */
console.log("Happy Birthday Siya ❤️");
