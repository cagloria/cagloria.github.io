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

var PROJECTS = (() => {
    let _devProjects = [
        devProject(
            "../../assets/project-image-countries.jpg",
            "Screenshot of the Rest Countries API Challenge project, showing the flags and names of various countries",
            "REST Countries API Challenge",
            "July 2020",
            "Sends a GET request to the REST Countries API and displays country data. Allows the user to filter countries by text and region. Contains a responsive design and a theme toggle.",
            "https://cagloria.github.io/rest-countries-api/",
            "https://github.com/cagloria/rest-countries-api"
        ),
        devProject(
            "../../assets/project-image-url.jpg",
            "Screenshot of the URL Shortening API Challenge project, showing the project's landing page and input field",
            "Shortly URL Shortening API Challenge",
            "July 2020",
            "Sends a POST request containing a URL to the shrtcode API and displays a shortened URL. Contains a responsive design.",
            "https://cagloria.github.io/url-shortening-api/",
            "https://github.com/cagloria/url-shortening-api"
        ),
        devProject(
            "../../assets/project-image-easybank.jpg",
            "Screenshot of the Easybank Landing Page challenge project",
            "Easybank Landing Page",
            "June 2020",
            "A responsive landing page for a fictional banking app.",
            "https://cagloria.github.io/easybank-landing-page/",
            "https://github.com/cagloria/easybank-landing-page"
        ),
        devProject(
            "../../assets/project-image-job-listing.jpg",
            "Screenshot of the Job Listing challenge project, showing several job listings",
            "Job Listings Challenge",
            "March 2020",
            "Displays job listings and allows the user to filter them based on categories. Features a responsive design.",
            "https://cagloria.github.io/static-job-listings/",
            "https://github.com/cagloria/static-job-listings"
        ),
    ];

    const getDevProjects = () => _devProjects;

    return { getDevProjects };
})();

window.onload = function () {
    const projectContainer = document.getElementById("project-container");

    PROJECTS.getDevProjects().forEach((obj) => {
        projectContainer.appendChild(obj.element);
    });
};
