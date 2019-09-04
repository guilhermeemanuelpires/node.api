const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('select * from PEDIDO', callback);
    },
    findById: (params, callback) => {
        callback;
    },
    create: (params, callback) => {
        callback;
    },
    update: (params, callback) => {
        callback;
    },
    delete: (params, callback) => {
        callback;
    }
}