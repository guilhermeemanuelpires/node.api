const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('select * from CLIENTE', callback);
    },
    findById: (params, callback) => {
        connection.query('select * from CLIENTE where ID = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('insert cliente (CODIGO, NOME, EMAIL)  VALUES(?,?,?)', [params.codigo, params.nome, params.email], callback)
    },
    update: (params, callback) => {
        connection.query('update CLIENTE set CODIGO = ?, NOME = ?, EMAIL = ?  where ID = ? ',
            [params.codigo,
            params.nome,
            params.email,
            params.id
            ], callback);
    },
    delete: (params, callback) => {
        connection.query('delete from CLIENTE where ID = ?', [params.id], callback);
    }
}