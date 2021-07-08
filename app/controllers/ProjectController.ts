import { ProjeectDao } from "../dao/ProjectDao.js";
import { Project } from "../models/Project.js";
import { Connectionfactory } from "../services/ConnectionFactory.js";

export class ProjectController {

    private inputName: HTMLInputElement;
    private inputDescription: HTMLInputElement;
    private inputLanguage: HTMLInputElement;
    private inputColor: HTMLInputElement;
    private inputCode: HTMLInputElement;

    constructor() {
        this.inputName = document.querySelector('[data-name-input]');
        this.inputDescription = document.querySelector('[data-description-text]');
        this.inputLanguage = document.querySelector('[data-language-select]');
        this.inputColor = document.querySelector('[data-color-input]');
        this.inputCode = document.querySelector('[data-code-text]');
    }

    add(event: Event): void {
        event.preventDefault();

        let project = this.createProejct();

        Connectionfactory.getConnection()
            .then(connection => {
                new ProjeectDao(connection)
                    .add(project)
                    .then(() => {
                        console.log("Projeto adicionado com sucesso!");
                    });
            })
            .catch(error => console.log(error));
    }

    private createProejct(): Project {
        return new Project(
            this.inputName.value,
            this.inputDescription.value,
            this.inputLanguage.value,
            this.inputColor.value,
            this.inputCode.value
        );
    }
}