class ProjectElement extends HTMLDivElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const image = this.dataset.image;
        const alt = this.dataset.alt;
        const title = this.dataset.title;
        const dateRange = this.dataset.date;
        const description = this.dataset.description;
        const tools = this.dataset.tools;
        const code = this.dataset.code;
        const preview = this.dataset.preview;

        let codeElement =
            code === undefined
                ? ""
                : `
            <a href="${code}" class="button-link" aria-label="${title} GitHub">
                GitHub
            </a>`;

        let previewElement =
            preview === undefined
                ? ""
                : `
            <a href="${preview}"
                class="button-link"
                aria-label="${title} live demo">
                    Live Demo
            </a>`;

        this.innerHTML = `
            <img src="${image}" alt="${alt}" class="project__image" />

            <h3 class="project__heading">${title}</h3>

            <p class="project__date">${dateRange}</p>

            <div class="project__divider"></div>
            
            <p class="project__description">${description}</p>
            
            <div class="project__links">
                ${previewElement}
                ${codeElement}
            </div>
        `;
    }
}

customElements.define("project-element", ProjectElement, { extends: "div" });
