// Smooth Scrolling Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Change Navbar Color on Scroll
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#222"; // Darker color on scroll
    } else {
        header.style.backgroundColor = "#333"; // Default color
    }
});

// Simple Click Interaction for Contact Section
document.getElementById("contact").addEventListener("click", function () {
    alert("Thanks for visiting! You can contact me via email.");
});
