import * as express from 'express'
import * as cors from 'cors';
import bodyParser = require('body-parser');

//Rotas
import estadoRoutes from './routes/estado.router';
import cidadeRoutes from './routes/cidade.router';
import clienteRoutes from './routes/cliente.router'

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
        this.express.use('/cidades', cidadeRoutes);
        this.express.use('/clientes', clienteRoutes);
    }

}