const repository = require('../repository/cidade.repository');

module.exports = {
    find: (req, res) => {
        repository.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.status(500).send(error);
        });
    },
    findById: (req, res) => {

        repository.findById(req.params).then(result => {
            if (result.length > 0) {
                res.send(result[0]);
            } else {
                res.status(404).send('not found');
            }
        }).catch(error => {
            res.status(500).send(error);
        });

        // repository.findById(req.params, (error, result) => {
        //     if (error) {
        //         res.status(500).send(error);
        //     }

        //     //Valida se o id existe no banco
        //     if (!result[0]) {
        //         res.status(404).send('not found');
        //     }

        //     res.send(result[0]);
        // });
    },
    create: (req, res) => {

        //Converter de OBJETO para RELACIONAL
        const cidade = {
            nome: req.body.nome,
            estado_id: req.body.estado.id
        }

        repository.create(cidade, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            res.send(result);
        });
    },
    update: (req, res) => {
        //Atualizar o id do objeto do req.body
        req.body.id = req.params.id;

        repository.update(req.body, (error, result) => {
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

            res.status(204).send();
        });
    }
}