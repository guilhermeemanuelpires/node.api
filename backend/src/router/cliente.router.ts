import { Router } from 'express';
import cliententroller from '../controller/cliente.controller';

class ClienteRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', cliententroller.find);
        this.router.post('/', cliententroller.create);
    }
}
export default new ClienteRouter().router;