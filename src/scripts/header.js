const mediaQuery580 = window.matchMedia("(min-width: 580px)");

function toggleNav() {
    const header = document.getElementsByTagName("header")[0];
    const openNavClass = "open-nav";

    header.classList.toggle(openNavClass);
    header.classList.contains(openNavClass) ? openNav() : closeNav();
}

function handleMediaChange(event) {
    const header = document.getElementsByTagName("header")[0];
    const navButton = document.getElementById("nav-button");
    header.classList.remove("open-nav");

    if (event.matches) {
        navButton.setAttribute("aria-hidden", "true");
        openNav();
    } else {
        navButton.setAttribute("aria-hidden", "false");
        closeNav();
    }
}

function openNav() {
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");

    navButton.setAttribute("aria-expanded", "true");
    navButton.setAttribute("aria-label", "Close navigation");
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "0");
    });
}

function closeNav() {
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");

    navButton.setAttribute("aria-expanded", "false");
    navButton.setAttribute("aria-label", "Open navigation");
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
    });
}

window.onscroll = function () {
    const header = document.getElementsByTagName("header")[0];
    header.classList.contains("open-nav") ? closeNav() : null;
};

window.onload = function () {
    const navButton = document.getElementById("nav-button");
    const navLi = document.querySelectorAll("nav li");
    const navLinks = document.querySelectorAll("nav a");

    mediaQuery580.addEventListener("change", handleMediaChange);
    handleMediaChange(mediaQuery580);

    navButton.addEventListener("click", toggleNav);
    navLi.forEach((li) => {
        li.setAttribute("role", "none");
    });
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
        link.setAttribute("role", "menuitem");
    });
};
