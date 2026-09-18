function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}


// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav-links").classList.remove("active");

    });

});


// Simple scroll animation
const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card, .interest-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.7s ease";

    observer.observe(card);

});
