import { Project } from "../models/Project.js";

export class ProjectController {

    private _inputName: HTMLInputElement;
    private _inputDescription: HTMLInputElement;
    private _inputLanguage: HTMLInputElement;
    private _inputColor: HTMLInputElement;

    constructor() {
        this._inputName = document.querySelector('[data-name-input]');
        this._inputDescription = document.querySelector('[data-description-text]');
        this._inputLanguage = document.querySelector('[data-language-select]');
        this._inputColor = document.querySelector('[data-color-input]');
    }

    add(): void {
        const project = new Project(
            this._inputName.value,
            this._inputDescription.value,
            this._inputLanguage.value,
            this._inputColor.value
        );

        console.log(project);
    }
}