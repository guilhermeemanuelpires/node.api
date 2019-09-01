const knex = require('../mysql-connection');

const query = ' select c.id, c.nome as nome_cidade, c.estado_id, e.nome as nome_estado, e.sigla from cidade c ' +
    ' inner join estado e on e.id = c.estado_id ';

module.exports = {
    find: (callback) => {
        return knex.from('cidade').innerJoin('estado', 'estado.id', 'cidade.estado_id');
    },

    findById: (params) => {
        return knex.from('cidade').innerJoin('estado', 'estado.id', 'cidade.estado_id').where({ id: params.id });
    },
    create: (callback) => {
        connection.query('', callback);
    },
    update: (params, callback) => {
        connection.query('update cidade set nome = ?, estado_id = ?  where id = ? ',
            [params.nome,
            params.estado_id,
            params.id
            ], callback);
    },
    delete: (params, callback) => {
        connection.query('delete from cidade where id = ?', [params.id], callback);
    },
}