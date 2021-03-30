window.onload = function () {
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");

    navButton.addEventListener("click", toggleNav);
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
    });
};

function toggleNav() {
    const header = document.getElementsByTagName("header")[0];
    const navButton = document.getElementById("nav-button");
    const navLinks = document.querySelectorAll("nav a");
    const openNavClass = "open-nav";

    header.classList.toggle(openNavClass);

    if (header.classList.contains(openNavClass)) {
        navButton.setAttribute("aria-expanded", "true");
        navButton.setAttribute("aria-label", "Close navigation");
        navLinks.forEach((link) => {
            link.setAttribute("tabindex", "0");
        });
    } else {
        navButton.setAttribute("aria-expanded", "false");
        navButton.setAttribute("aria-label", "Open navigation");
        navLinks.forEach((link) => {
            link.setAttribute("tabindex", "-1");
        });
    }
}
