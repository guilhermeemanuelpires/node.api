import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TabelaprecoEntity } from "../entity/tabelapreco.entity";

class TabelaprecoController {
    public async find(req: Request, res: Response) {
        console.log(getRepository(TabelaprecoEntity).find);
        try {
            const tabelaprecos  = await getRepository(TabelaprecoEntity).find();
            res.send(tabelaprecos);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const tabelapreco = req.body;
            await getRepository(TabelaprecoEntity).save(tabelapreco);
            res.send(tabelapreco);
        } catch (error) {
            res.status(500).send(error);
        }
    }


    public async findById(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaprecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }
            
            res.send(tabelapreco);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaprecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(TabelaprecoEntity).update(tabelapreco.id, novo);
            
            //Atualiza ID do novo
            novo.id = tabelapreco.id;

            res.send(novo);
        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Busca registro pelo ID
            const tabelapreco = await getRepository(TabelaprecoEntity).findOne(id);

            //Se não encontrar, devolve erro 404
            if (!tabelapreco) {
                res.status(404).send('Not found');
                return;    
            }

            await getRepository(TabelaprecoEntity).delete(tabelapreco);
            
            res.status(204).send();
        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new TabelaprecoController();