const repository = require('../repository/estado.repository');
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

    },
    findById: (req, res) => {
<<<<<<< HEAD
        repository.findById(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error)
            }
            if (!result[0]) {
                res.status(404).send('Not Found');
            }
            res.send(result);
        });
=======

>>>>>>> master
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
<<<<<<< HEAD
        repository.delete(req.params, (error, result) => {
            if (error) {
                res.status(500).send(error)
            }
            res.status(204).send(result);
        });
=======

>>>>>>> master
    }
}); 