/* =========================================================
   AASTHA SINGH — PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================
   ELEMENTS
   ========================= */

const header = document.getElementById("header");

const menuToggle =
    document.getElementById("menu-toggle");

const navMenu =
    document.getElementById("nav-menu");

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section[id]");


/* =========================
   MOBILE MENU
   ========================= */

menuToggle.addEventListener("click", () => {

    const isOpen =
        navMenu.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close mobile menu after clicking */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================
   HEADER ON SCROLL
   ========================= */

function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================
   ACTIVE NAVIGATION
   ========================= */

function updateActiveSection() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove(
                    "active"
                );

                const href =
                    link.getAttribute("href");

                if (
                    href === `#${sectionId}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveSection
);


/* =========================
   SCROLL REVEAL
   ========================= */

const animatedElements =
    document.querySelectorAll(
        ".project-card, " +
        ".skill-group, " +
        ".achievement-card, " +
        ".experience-card, " +
        ".timeline-item"
    );


const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


animatedElements.forEach((element) => {

    observer.observe(element);

});


/* =========================
   ESCAPE KEY
   ========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("open")
        ) {

            navMenu.classList.remove(
                "open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }
);