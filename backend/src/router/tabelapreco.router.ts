import { Router } from 'express';
import TabelaprecoController from '../controller/tabelapreco.controller';

class ProdutoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', TabelaprecoController.find);
        this.router.post('/', TabelaprecoController.create);


        this.router.get('/:id([0-9]+)', TabelaprecoController.findById);
        this.router.put('/:id([0-9]+)', TabelaprecoController.update);
        this.router.delete('/:id([0-9]+)', TabelaprecoController.delete);
    }
}
export default new ProdutoRoutes().router;