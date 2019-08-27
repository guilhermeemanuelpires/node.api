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

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }

}); 
