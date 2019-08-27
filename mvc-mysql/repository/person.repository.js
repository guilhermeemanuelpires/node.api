const connection = require('../mysql-connection');
module.exports = {
    find: (callback) => {
        connection.query('select * from persons', callback);
    },
    findById: (params, callback) => {
        connection.query('select * from persons where id = ?', [params.id], callback);
    },
    update: (params, callback) => {
        connection.query('update persons set name = ?, gender ?, age = ?, where id = ?',
                            [   params.name,
                                params.gender,
                                params.age,
                                params.id,
                            ], callback);
    },
    delete: (params, callback) => {
        connection.query('delete from persons where id = ?', [params.id], callback);
    }
};