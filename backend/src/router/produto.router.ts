import { Router } from 'express';
import ProdutoController from '../controller/produto.controller';

class ProdutoRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    private init() {
        this.router.get('/', ProdutoController.find);
        this.router.post('/', ProdutoController.create);

        
        this.router.get('/:id([0-9]+)', ProdutoController.findById);
        this.router.put('/:id([0-9]+)', ProdutoController.update);
        this.router.delete('/:id([0-9]+)', ProdutoController.delete);
    }
}
export default new ProdutoRoutes().router;