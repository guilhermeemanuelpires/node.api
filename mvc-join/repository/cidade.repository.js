const connection = require('../mysql-connection');

const query = ' select c.id, c.nome as nome_cidade, c.estado_id, e.nome as nome_estado, e.sigla from cidade c ' +
    ' inner join estado e on e.id = c.estado_id ';

module.exports = {
    find: (callback) => {
        connection.query(query, callback);
    },
    findById: (params, callback) => {
        connection.query('select * from cidade where id = ?', [params.id], callback);
    },
    create: (callback) => {
        connection.query('INSERT INTO cidade (nome,estado_id) VALUES (?,?)', [params.nome, params.estado_id], callback);
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