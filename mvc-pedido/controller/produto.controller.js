const repository = require('../repository/produto.repository');

module.exports = {
    find: (req, res) => {
        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },
    findById: (req, res) => {
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (!result[0]) {
                res.status(400).send('not found');
            }

            res.send(result);
        });
    },
    create: (req, res) => {
        repository.create(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },
    update: (req, res) => {
        const vendedor = {
            codigo: req.body.codigo,
            nome: req.body.nome,
            descricao: req.body.descricao,
            id: req.params.id
        }

        repository.update(vendedor, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0) {
                res.status(404).send('not found');
            }

            res.send(result);
        });
    },
    delete: (req, res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    }
}