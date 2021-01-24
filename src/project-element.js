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
            <a href="${code}" class="icon-link">
                <ion-icon
                    name="logo-github"
                    class="icon-link__icon"
                    aria-hidden="true"
                ></ion-icon>
                <div class="icon-link__cover"></div>
                <span class="icon-link__text">Code</span>
            </a>`;

        let previewElement =
            preview === undefined
                ? ""
                : `
            <a 
                href="${preview}"
                class="icon-link icon-link--shorter-translate"
            >
                <span
                    class="material-icons icon-link__icon"
                    aria-hidden="true"
                >
                    play_circle
                </span>
                <div class="icon-link__cover"></div>
                <span class="icon-link__text">Preview</span>
            </a>`;

        this.innerHTML = `
            <img src="${image}" alt="${alt}" class="project__image" />
            <div class="project__content">
                <h3>${title}</h3>

                <p>${dateRange}</p>
                
                <p>${description}</p>
                
                <p><b>Tools:</b> ${tools}</p>
                
                <div class="flex-row-justify-center project__links">
                    ${previewElement}
                    ${codeElement}
                </div>
            </div>
        `;
    }
}

customElements.define("project-element", ProjectElement, { extends: "div" });
