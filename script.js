const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const activateNavLink = (sectionId) => {
    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
        }
    });
};

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeNavLink(entry.target.id);
            }
        });
    },
    {
        root: null,
        threshold: 0.35,
        rootMargin: "-25% 0px -45% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});

