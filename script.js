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
