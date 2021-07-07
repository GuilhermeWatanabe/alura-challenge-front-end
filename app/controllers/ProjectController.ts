import { Project } from "../models/Project.js";

export class ProjectController {

    private inputName: HTMLInputElement;
    private inputDescription: HTMLInputElement;
    private inputLanguage: HTMLInputElement;
    private inputColor: HTMLInputElement;

    constructor() {
        this.inputName = document.querySelector('[data-name-input]');
        this.inputDescription = document.querySelector('[data-description-text]');
        this.inputLanguage = document.querySelector('[data-language-select]');
        this.inputColor = document.querySelector('[data-color-input]');
    }

    add(): void {
        const project = new Project(
            this.inputName.value,
            this.inputDescription.value,
            this.inputLanguage.value,
            this.inputColor.value
        );

        console.log(project);
    }
}