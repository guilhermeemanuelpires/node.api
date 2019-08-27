const persons = [];
const repository = require('../repository/person.repository');
module.exports = ({
    find: (req, res) => {
        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            res.send(result);
        });
    },
    create: (req, res) => {
        repository.create(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            result.send(result);
        });
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
        // Atualiza  o id do objeto do req.body
        req.body.id = req.params.id;
        repository.update(req.body, (error, result) => {
            if (error) {
                res.status(500).send(error);
            }

            if (result.affectedRows == 0) {
                res.status(404).send(error);
            }

            res.send(result);
        });
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