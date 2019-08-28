const connection = require('../mysql-connection');

module.exports = {
    find: () => {
        return knex.select().from('estado');
    },
    findById: (params) => {
        return Knex.select().from('estado').where({ id: params.id });
    },
    create: (callback) => {
        // connection.query('', callback);
    },
    update: (params, callback) => {
        // connection.query('update estado set nome = ?, sigla = ? where id = ?',
        //     [
        //         params.nome,
        //         params.sigla,
        //         params.id
        //     ],
        //     callback);
    },
    delete: (params, callback) => {
        // connection.query('delete from estado where id = ?', [params.id], callback);
    },
}