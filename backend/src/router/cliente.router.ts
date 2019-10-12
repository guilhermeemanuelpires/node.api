import { Router } from 'express';
import clienteController from '../controller/cliente.controller';

class ClienteRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', clienteController.find);
        this.router.post('/', clienteController.create);

        this.router.get('/:id([0-9]+)', clienteController.findById);
        this.router.put('/:id([0-9]+)', clienteController.update);
        this.router.delete('/:id([0-9]+)', clienteController.delete);
    }
}
export default new ClienteRouter().router;