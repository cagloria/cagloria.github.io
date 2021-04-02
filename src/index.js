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
