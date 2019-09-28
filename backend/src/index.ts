import { createConnection, Connection } from 'typeorm';
import * as http from 'http';
import * as app from './app';

createConnection().then(connection => {

    const server = http.createServer(app);

    server.listen(3000, () => {
        console.log('Applicação está rodando na porta 3000');
    })

}).catch(error => {
    console.log('TypeORM dont connected: %s', error);
});