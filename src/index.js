import { setupHeader, closeNavOnScroll } from "./scripts/header.js";
import { loadProjects } from "./scripts/projects.js";

window.onload = function () {
    setupHeader();
    loadProjects();
};

window.onscroll = function () {
    closeNavOnScroll();
};
