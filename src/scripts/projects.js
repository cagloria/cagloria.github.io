const devProject = (title, desc, demoLink, tags, gitHubLink) => {
    const element = document.createElement("div");
    element.classList.add("project");
    element.classList.add("project--dev");

    // GitHub link -- if gitHubLink is undefined, it does not create a link
    let gitLinkElement =
        gitHubLink === undefined
            ? ""
            : `<a
                href="${gitHubLink}" 
                aria-label="${title} on GitHub" 
                class="underline-link">
                    <img src="../../assets/icon-github.svg" />
                </a>`;

    // Demo link -- if demoLink is undefined, it does not create a link
    let demoLinkElement =
        demoLink === undefined
            ? ""
            : `<a 
                href="${demoLink}"
                aria-label="${title} demo"
                class="underline-link">
                    <img src="../../assets/icon-link.svg" />
                </a>`;

    // Creates list for tags
    let tagsElement = `<ul 
        class="project__tags-list remove-default-list">`;

    tags.forEach((tag) => {
        tagsElement += `<li>${tag}</li>`;
    });

    tagsElement += `</ul>`;

    // Combine into total element
    element.innerHTML = `
        <div class="project__body">
            <h3 class="project__heading">${title}</h3>
            <p class="project__desc">${desc}</p>
            ${tagsElement}
            <div class="project__links">
                ${gitLinkElement}
                ${demoLinkElement}
            </div>
        </div>
        `;

    return { element };
};

const designProject = (image, imgAlt, title, desc, link) => {
    const element = document.createElement("div");
    element.classList.add("project");
    element.classList.add("project--design");

    element.innerHTML = `
            <img
                src="${image}" 
                alt="${imgAlt}" 
                class="project__image" 
            />
            <div class="project__body">
                <h3 class="project__heading">${title}</h3>
                <p class="project__desc">${desc}</p>
                <div class="project__links">
                    <a 
                        href="${link}" 
                        aria-label="${title} on Behance"
                        class="underline-link" 
                        >
                            <img src="../../assets/icon-behance.svg" />
                    </a>
                </div>
            </div>
        `;

    return { element };
};

function displayDevProjects() {
    const projectContainer = document.getElementById("dev-projects");
    PROJECTS.getDevProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
}

function displayDesignProjects() {
    const projectContainer = document.getElementById("design-projects");
    PROJECTS.getDesignProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
}

export function loadProjects() {
    displayDevProjects();
    displayDesignProjects();
}

export const PROJECTS = (() => {
    const _devProjects = [
        devProject(
            "Launch Countdown Timer",
            "A react app that displays a countdown timer for a randomized launch date stored in the browser's local storage, and updates every second. Uses styled-components for styling.",
            "https://cagloria.github.io/launch-countdown-timer/",
            ["React", "JavaScript", "SCSS"],
            "https://github.com/cagloria/launch-countdown-timer"
        ),
        devProject(
            "Weather App",
            "A React app that fetches data from the OpenWeather API to display the current weather, sunrise/sunset, and 3-day forecast of the entered city. Allows the user to change the temperature scale with a toggle. Uses styled-components to change the color theme.",
            undefined,
            ["React", "JavaScript", "SCSS", "API"],
            "https://github.com/cagloria/weather-app"
        ),
        devProject(
            "Easybank Landing Page",
            "A responsive landing page for a fictional banking app.",
            "https://cagloria.github.io/easybank-landing-page/",
            ["HTML", "JavaScript", "SCSS"],
            "https://github.com/cagloria/easybank-landing-page"
        ),
        devProject(
            "Job Listings",
            "A page that displays job listings and allows the user to filter them based on categories.",
            "https://cagloria.github.io/static-job-listings/",
            ["HTML", "JavaScript", "SCSS"],
            "https://github.com/cagloria/static-job-listings"
        ),
    ];

    const _designProjects = [
        designProject(
            "../../assets/projects/cover-weather.jpg",
            "The Weather App screen displayed on desktop, tablet, and mobile",
            "Weather App",
            "Shows the current weather, sunrise and sunset, and 3-day forecast of an entered city. The app's color theme reflects if it's daytime or nighttime in the city. Initially designed in Invision Studio and finalized in code.",
            "https://www.behance.net/gallery/119018551/Weather-App"
        ),
        designProject(
            "../../assets/projects/cover-goals.jpg",
            "The Goal Tracker app's daily and weekly sections",
            "Goals Tracker",
            "Tracks daily and weekly goals, displaying a progress bar and how much time or how many instances remain. Features a light mode and dark mode. Designed in Figma.",
            "https://www.behance.net/gallery/116895337/Goals-Tracker"
        ),
    ];

    const getDevProjects = () => _devProjects;

    const getDesignProjects = () => _designProjects;

    return { getDevProjects, getDesignProjects };
})();
