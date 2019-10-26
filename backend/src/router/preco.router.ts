import { Router } from 'express';
import PrecoController from '../controller/preco.controller';

class PrecoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', PrecoController.find);
        this.router.post('/', PrecoController.create);

        
        this.router.get('/:id([0-9]+)', PrecoController.findById);
        this.router.put('/:id([0-9]+)', PrecoController.update);
        this.router.delete('/:id([0-9]+)', PrecoController.delete);
    }
}
export default new PrecoRoutes().router;