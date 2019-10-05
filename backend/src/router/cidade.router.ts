import { Router } from 'express';
import cidadeController from '../controller/cidade.controller';

class CidadeRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', cidadeController.find);
        this.router.post('/', cidadeController.create);
    }
}
export default new CidadeRoutes().router;