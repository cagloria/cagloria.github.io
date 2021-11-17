import { closeNavOnScroll } from "./scripts/header.js";
import { loadProjects } from "./scripts/projects.js";

window.onload = function () {
    loadProjects();
};

window.onscroll = function () {
    closeNavOnScroll();
};
