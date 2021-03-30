window.onload = function () {
    const navButton = document.getElementById("nav-button");
    const navLi = document.querySelectorAll("nav li");
    const navLinks = document.querySelectorAll("nav a");

    navButton.addEventListener("click", toggleNav);
    navLi.forEach((li) => {
        li.setAttribute("role", "none");
    });
    navLinks.forEach((link) => {
        link.setAttribute("tabindex", "-1");
        link.setAttribute("role", "menuitem");
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
