import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { EstadoEntity } from "../entity/estado.entity";

class EstadoController {
    public async find(req: Request, res: Response) {
        try {
            const estados = await getRepository(EstadoEntity).find;
            res.send(estados);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const estado = req.body;
            await getRepository(EstadoEntity).save(estado);
            res.send(estado);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new EstadoController();