import { ProjectController } from "./controllers/ProjectController.js";

const projectController = new ProjectController();
const saveButton = document.querySelector('[data-button-save]');
saveButton.addEventListener('click', projectController.add.bind(projectController));
