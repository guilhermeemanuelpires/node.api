const connection = require('../mysql-connection');

module.exports = {
    find: (callback) => {
        connection.query('select * from PRODUTO', callback);
    },
    findById: (params, callback) => {
        connection.query('select * from PRODUTO where ID = ?', [params.id], callback);
    },
    create: (params, callback) => {
        connection.query('insert PRODUTO (CODIGO, NOME, DESCRICAO)  VALUES(?,?,?)', [params.codigo, params.nome, params.email], callback)
    },
    update: (params, callback) => {
        connection.query('update PRODUTO set CODIGO = ?, NOME = ?, DESCRICAO = ?  where ID = ? ',
            [params.codigo,
            params.nome,
            params.email,
            params.id
            ], callback);
    },
    delete: (params, callback) => {
        connection.query('delete from PRODUTO where ID = ?', [params.id], callback);
    }
}