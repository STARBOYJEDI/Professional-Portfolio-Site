document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");
    const nav = document.querySelector(".site-nav");

    const setActiveLink = (sectionId) => {
        navLinks.forEach((link) => {
            const linkTarget = link.getAttribute("href");

            if (linkTarget === `#${sectionId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    const updateActiveLink = () => {
        const navHeight = nav ? nav.offsetHeight : 0;
        const scrollPosition = window.scrollY + navHeight + window.innerHeight * 0.25;

        let currentSectionId = sections[0]?.id;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionId = section.id;
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
            currentSectionId = sections[sections.length - 1].id;
        }

        setActiveLink(currentSectionId);
    };

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("resize", updateActiveLink);

    updateActiveLink();
});