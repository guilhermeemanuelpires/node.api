import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { PrecoEntity } from "../entity/preco.entity";

class PrecoController {
    public async find(req: Request, res: Response) {
        console.log(getRepository(PrecoEntity).find);
        try {
            const precos = await getRepository(PrecoEntity).find();
            res.send(precos);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const preco = req.body;
            await getRepository(PrecoEntity).save(preco);
            res.send(preco);
        } catch (error) {
            res.status(500).send(error);
        }
    }


    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const preco = await getRepository(PrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!preco) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(preco);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const preco = await getRepository(PrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!preco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PrecoEntity).update(preco.id, novo);
            
            //Atualiza ID do novo
            novo.id = preco.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const preco = await getRepository(PrecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!preco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(PrecoEntity).delete(preco);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new PrecoController();