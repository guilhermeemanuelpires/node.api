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

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}); 
