import { Project } from "../models/Project.js";

export class ProjeectDao {

    private connection: IDBDatabase;
    private store = 'projects';

    constructor(connection: IDBDatabase) {
        this.connection = connection;
    }

    add(project: Project): Promise<void> {

        return new Promise((resolve, reject) => {
            let request = this.connection
                .transaction([this.store], 'readwrite')
                .objectStore(this.store)
                .add(project);
    
            request.onsuccess = e => {
                resolve();
            }

            request.onerror = e => {
                console.log(request.error);
                reject('Não foi possivel adicionar o projeto.');
            }

        })
    }
}