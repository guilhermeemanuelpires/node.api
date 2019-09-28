import * as express from 'express'
import * as cors from 'cors';
import estadoRoutes from './routes/estado.router';
import bodyParser = require('body-parser');

class App {
    public express = express.application;

    constructor() {
        this.express = express();
        this.miidleware();

    }
    //carrega  os miidleware da aplicação
    private miidleware(): void {
        this.express.use(bodyParser.json);
        this.express.use(cors);
    }

    private routes(): void {
        this.express.use('/estados', estadoRoutes);
    }


}