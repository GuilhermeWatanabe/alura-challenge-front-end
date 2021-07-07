var connection: IDBDatabase = null;
var close: any = null;

export class Connectionfactory {

    static getConnection() {
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open('alura', 1);

            openRequest.onupgradeneeded = e => {
                if(openRequest.result.objectStoreNames.contains('alura')) {
                    openRequest.result.deleteObjectStore('alura');
                }

                openRequest.result.createObjectStore('alura', {autoIncrement: true});
            }

            openRequest.onsuccess = e => {
                if(!connection) {
                    connection = openRequest.result;
                    close = connection.close.bind(connection);
                    connection.close = () => {
                        throw new Error('A conexão não pode ser fechada diretamente.');
                    }
                }

                resolve(connection);
            }

            openRequest.onerror = e => {
                console.log(openRequest.error);
                reject(openRequest.error.name);
            }
        });
    }

    static closeConnection(): void {
        if(connection) {
            close();
            connection = null;
        }
    }
}