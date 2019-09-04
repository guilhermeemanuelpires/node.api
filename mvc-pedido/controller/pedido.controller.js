const repository = require('../repository/pedido.repository');

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