import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ClienteEntity } from "../entity/cliente.entity";

class ClienteController {
    public async find(req: Request, res: Response) {
        try {
            const estados = await getRepository(ClienteEntity).find;
            res.send(estados);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async create(req: Request, res: Response) {
        try {
            const cliente = req.body;
            await getRepository(ClienteEntity).save(cliente);
            res.send(cliente);
        } catch (error) {
            res.status(500).send(error);
        }
    }

}

export default new ClienteController();