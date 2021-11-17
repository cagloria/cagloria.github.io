export function closeNavOnScroll() {
    const header = document.getElementsByTagName("header")[0];
    if (header.classList.contains("open-nav")) {
        header.classList.remove("open-nav");
        closeNav();
    }
}
