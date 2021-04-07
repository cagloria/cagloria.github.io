const devProject = (
    image,
    imgAlt,
    title,
    date,
    desc,
    previewLink,
    codeLink
) => {
    const element = document.createElement("div");
    element.classList.add("project");

    let codeElement =
        codeLink === undefined
            ? ""
            : `<a 
                href="${codeLink}" 
                class="button-link" 
                aria-label="${title} GitHub"
                >GitHub
            </a>`;

    let previewElement =
        previewLink === undefined
            ? ""
            : `<a 
                href="${previewLink}"
                class="button-link"
                aria-label="${title} live demo"
                >Live Demo
            </a>`;

    element.innerHTML = `
            <img src="${image}" alt="${imgAlt}" class="project__image" />
            <h3 class="project__heading">${title}</h3>
            <p class="project__date">${date}</p>
            <div class="project__divider"></div>
            <p class="project__description">${desc}</p>
            <div class="project__links">
                ${previewElement}
                ${codeElement}
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
                    aria-label="${title} design"
                    >Design
                </a>
            </div>
        `;

    return { element };
};

var PROJECTS = (() => {
    let _devProjects = [
        devProject(
            "../../assets/projects/cover-countries.jpg",
            "Screenshot of the Rest Countries API Challenge project, showing the flags and names of various countries",
            "REST Countries API Challenge",
            "July 2020",
            "Sends a GET request to the REST Countries API and displays country data. Allows the user to filter countries by text and region. Contains a responsive design and a theme toggle.",
            "https://cagloria.github.io/rest-countries-api/",
            "https://github.com/cagloria/rest-countries-api"
        ),
        devProject(
            "../../assets/projects/cover-url.jpg",
            "Screenshot of the URL Shortening API Challenge project, showing the project's landing page and input field",
            "Shortly URL Shortening API Challenge",
            "July 2020",
            "Sends a POST request containing a URL to the shrtcode API and displays a shortened URL. Contains a responsive design.",
            "https://cagloria.github.io/url-shortening-api/",
            "https://github.com/cagloria/url-shortening-api"
        ),
        devProject(
            "../../assets/projects/cover-easybank.jpg",
            "Screenshot of the Easybank Landing Page challenge project",
            "Easybank Landing Page",
            "June 2020",
            "A responsive landing page for a fictional banking app.",
            "https://cagloria.github.io/easybank-landing-page/",
            "https://github.com/cagloria/easybank-landing-page"
        ),
        devProject(
            "../../assets/projects/cover-jobs.jpg",
            "Screenshot of the Job Listing challenge project, showing several job listings",
            "Job Listings Challenge",
            "March 2020",
            "Displays job listings and allows the user to filter them based on categories. Features a responsive design.",
            "https://cagloria.github.io/static-job-listings/",
            "https://github.com/cagloria/static-job-listings"
        ),
    ];

    let _designProjects = [
        designProject(
            "../../assets/projects/cover-goals.jpg",
            "Screenshot of the Goals Tracker design, featuring the home screen",
            "Goals Tracker",
            "Apil 2021",
            "Tracks daily and weekly goals, displaying a progress bar and how much time or instances remain. Allows the user to track a goal by time, making progress through a stopwatch or pomodoro, or to create a goal by count, making progress through increments.",
            "https://www.behance.net/gallery/116895337/Goals-Tracker"
        ),
    ];

    const getDevProjects = () => _devProjects;

    const getDesignProjects = () => _designProjects;

    return { getDevProjects, getDesignProjects };
})();

function displayDevProjects() {
    const projectContainer = document.getElementById("project-container");

    PROJECTS.getDevProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
}

function displayDesignProjects() {
    const projectContainer = document.getElementById("project-container");

    PROJECTS.getDesignProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
}

window.onload = function () {
    displayDevProjects();
};
