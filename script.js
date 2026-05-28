const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector("button[type='submit']");

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
        formStatus.textContent = "";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                formStatus.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                formStatus.textContent = "Something went wrong. Please try again.";
            }
        } catch (error) {
            formStatus.textContent = "Could not send message. Please check your connection.";
        }

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    const formStatus = document.querySelector("#form-status");
    // const menuToggle = document.querySelector(".menu-toggle");
    // const navMenu = document.querySelector("#nav-menu");

    if (contactForm) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector("button[type='submit']");

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
            formStatus.textContent = "";

            try {
                const response = await fetch(contactForm.action, {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    formStatus.textContent = "Message sent successfully!";
                    contactForm.reset();
                } else {
                    formStatus.textContent = "Something went wrong. Please try again.";
                }
            } catch (error) {
                formStatus.textContent = "Could not send message. Please check your connection.";
            }

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";
        });
    }


    if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

        const icon = menuToggle.querySelector(".material-symbols-outlined");
        icon.textContent = isOpen ? "close" : "menu";
    });

    navMenu.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open menu");

            const icon = menuToggle.querySelector(".material-symbols-outlined");
            icon.textContent = "menu";
        });
    });
    }
    
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

