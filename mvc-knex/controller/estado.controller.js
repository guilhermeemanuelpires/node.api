const repository = require('../repository/estado.repository');
module.exports = ({
    find: (req, res) => {

        repository.find().then(result => {
            res.send(result);
        }).catch(error => {
            res.status(500).send(error);
        });
    },
    create: (req, res) => {

    },
    findById: (req, res) => {
        // repository.findById(req.params, (error, result) => {
        //     if (error) {
        //         res.status(500).send(error)
        //     }
        //     if (!result[0]) {
        //         res.status(404).send('Not Found');
        //     }
        //     res.send(result);
        // });
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        // repository.delete(req.params, (error, result) => {
        //     if (error) {
        //         res.status(500).send(error)
        //     }
        //     res.status(204).send(result);
        // });
    }
}); 
