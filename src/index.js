import { loadProjects } from "./scripts/projects.js";
import { addMediaQuery, changeHeader } from "./scripts/header.js";

window.onload = function () {
    loadProjects();
    addMediaQuery();
};

window.onscroll = function () {
    changeHeader();
};
