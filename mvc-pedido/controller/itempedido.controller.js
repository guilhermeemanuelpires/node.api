const repository = require('../repository/itempedido.repository');

module.exports = {
    find: (req, res) => {
        repository.find((error, result) => {
            if (error) {
                res.statust(500).send(error);
            }
            res.send(result);
        });
    },
    findById: (req, res) => {
        
    },
    create: (req, res) => {
        
    },
    update: (req, res) => {
        
    },
    delete: (req, res) => {
        
    }
}