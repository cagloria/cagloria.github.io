const devProject = (title, desc, demoLink, tags, gitHubLink) => {
    const element = document.createElement("div");
    element.classList.add("project--dev");
    element.classList.add("project");

    // GitHub link -- if gitHubLink is undefined, it does not create a link
    let gitLinkElement =
        gitHubLink === undefined
            ? ""
            : `<a
                href="${gitHubLink}" 
                aria-label="Project GitHub" 
                class="underline-link">
                    <img src="../../assets/icon-github.svg" />
                </a>`;

    // Demo link -- if demoLink is undefined, it does not create a link
    let demoLinkElement =
        demoLink === undefined
            ? ""
            : `<a 
                href="${demoLink}"
                aria-label="Project demo"
                class="underline-link">
                    <img src="../../assets/icon-link.svg" />
                </a>`;

    // Creates list for tags
    let tagsElement = `<ul 
        class="project--dev__tags-list remove-default-list">`;

    tags.forEach((tag) => {
        tagsElement += `<li>${tag}</li>`;
    });

    tagsElement += `</ul>`;

    // Combine into total element
    element.innerHTML = `
            <h3 class="project__heading">${title}</h3>
            <p class="project__body">${desc}</p>
            ${tagsElement}
            <div class="project__links">
                ${gitLinkElement}
                ${demoLinkElement}
            </div>
        `;

    return { element };
};

const designProject = (image, imgAlt, title, date, desc, link) => {
    const element = document.createElement("div");
    element.classList.add("project");

    element.innerHTML = `
            <img src="${image}" alt="${imgAlt}" class="project__image" />
            <h3 class="project__heading">${title}</h3>
            <p class="project__date">${date}</p>
            <div class="project__divider"></div>
            <p class="project__description">${desc}</p>
            <div class="project__links">
                <a 
                    href="${link}" 
                    class="button-link" 
                    aria-label="${title} on Behance"
                    >Behance
                </a>
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
    const projectContainer = document.getElementById("project-container");
    const currentProjects = document.querySelectorAll(
        "#project-container > div.project"
    );
    const devBtn = document.getElementById("dev-category-btn");
    const designBtn = document.getElementById("design-category-btn");

    devBtn.classList.remove("category-button--active");
    designBtn.classList.add("category-button--active");

    currentProjects.forEach((element) => {
        element.remove();
    });

    PROJECTS.getDesignProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
}

export function loadProjects() {
    displayDevProjects();
}

export const PROJECTS = (() => {
    const _devProjects = [
        devProject(
            "Weather App",
            "Fetches data from the OpenWeather API to display the current weather of any city, the sunrise/sunset in local time, and the 3-day forecast. Allows the user to change the temperature scale with a toggle. Uses styled-components to change the color theme depending on if it's daytime or nighttime in the selected city.",
            undefined,
            ["React", "JavaScript", "SCSS", "API"],
            "https://github.com/cagloria/weather-app"
        ),
        devProject(
            "REST Countries API Challenge",
            "Sends a GET request to the REST Countries API and displays country data. Allows the user to filter countries by text and region. Contains a responsive design and a theme toggle.",
            "https://cagloria.github.io/rest-countries-api/",
            ["React", "JavaScript", "SCSS", "API"],
            "https://github.com/cagloria/rest-countries-api"
        ),
        devProject(
            "Shortly URL Shortening API Challenge",
            "Sends a POST request containing a URL to the shrtcode API and displays a shortened URL. Contains a responsive design.",
            "https://cagloria.github.io/url-shortening-api/",
            ["React", "JavaScript", "SCSS", "API"],
            "https://github.com/cagloria/url-shortening-api"
        ),
        devProject(
            "Easybank Landing Page",
            "A responsive landing page for a fictional banking app.",
            "https://cagloria.github.io/easybank-landing-page/",
            ["HTML", "JavaScript", "SCSS"],
            "https://github.com/cagloria/easybank-landing-page"
        ),
        devProject(
            "Job Listings Challenge",
            "Displays job listings and allows the user to filter them based on categories. Features a responsive design.",
            "https://cagloria.github.io/static-job-listings/",
            ["HTML", "JavaScript", "SCSS"],
            "https://github.com/cagloria/static-job-listings"
        ),
    ];

    const _designProjects = [
        designProject(
            "Weather App",
            "May 2021",
            "Shows the current weather of any city, the sunrise/sunset in local time, and the 3-day forecast. Features a temperature scale toggle. The app's color theme reflects if it's daytime or nighttime in the city.",
            "https://www.behance.net/gallery/119018551/Weather-App"
        ),
        designProject(
            "Goals Tracker",
            "April 2021",
            "Tracks daily and weekly goals, displaying a progress bar and how much time or instances remain. Allows the user to track a goal by time, making progress through a stopwatch or pomodoro, or to create a goal by count, making progress through increments.",
            "https://www.behance.net/gallery/116895337/Goals-Tracker"
        ),
    ];

    const getDevProjects = () => _devProjects;

    const getDesignProjects = () => _designProjects;

    return { getDevProjects, getDesignProjects };
})();
