const repository = require('../repository/cidade.repository');
module.exports = ({
    find: (req, res) => {
        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            const cidades = [];
            for (item of result) {
                let cidade = {
                    id: item.id,
                    nome: item.nome_cidade,
                    estado: {
                        nome: item.nome_estado,
                        sigla: item.sigla
                    }
                }
                cidades.push(cidade);
            }
            res.send(cidades);
        });
    },
    create: (req, res) => {

    },
    findById: (req, res) => {
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error)
            }
            if (!result[0]) {
                res.status(404).send('Not Found');
            }
            res.send(result);
        });
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error)
            }
            res.status(204).send(result);
        });
    }

}); 
