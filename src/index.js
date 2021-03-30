window.onload = function () {
    const navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", toggleNav);
};

function toggleNav() {
    const openNavClass = "open-nav";
    const header = document.getElementsByTagName("header")[0];

    header.classList.toggle(openNavClass);

    // if (header.classList.contains(openNavClass)) {
    //     header.classList.remove(openNavClass);
    // } else {
    //     header.classList.add(openNavClass);
    // }
}
