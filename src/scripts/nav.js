window.onscroll = function () {
    const header = document.getElementsByTagName("header")[0];
    header.classList.contains("open-nav") ? closeNav() : null;
};

function toggleNav() {
    const header = document.getElementsByTagName("header")[0];
    const openNavClass = "open-nav";

    header.classList.toggle(openNavClass);
    header.classList.contains(openNavClass) ? openNav() : closeNav();
}

function openNav() {
    const header = document.getElementsByTagName("header")[0];
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");

    header.classList.add("open-nav");
    navButton.setAttribute("aria-expanded", "true");
    navButton.setAttribute("aria-label", "Close navigation");
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "0");
    });
}

function closeNav() {
    const header = document.getElementsByTagName("header")[0];
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");

    header.classList.remove("open-nav");
    navButton.setAttribute("aria-expanded", "false");
    navButton.setAttribute("aria-label", "Open navigation");
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
    });
}
