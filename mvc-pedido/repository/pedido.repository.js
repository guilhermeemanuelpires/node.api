const connection = require('../mysql-connection');
const query = ' SELECT ' +
    ' P.ID, P.CODIGO AS COD_PED, P.DTPEDIDO, P.OBSERVACAO, P.CLIENTE_ID, P.VENDEDOR_ID, ' +
    ' C.CODIGO AS COD_CLI, C.NOME AS NOME_CLI, C.EMAIL AS EMAIL_CLI, ' +
    ' V.CODIGO AS COD_VEN, V.NOME AS NOME_VEN, V.EMAIL AS EMAIL_VEN ' +
    ' FROM PEDIDO P ' +
    ' LEFT JOIN CLIENTE C ON C.ID = P.CLIENTE_ID ' +
    ' LEFT JOIN VENDEDOR V ON V.ID = P.VENDEDOR_ID ';

module.exports = {
    find: (callback) => {
        connection.query(query, (error, resultPedido) => {

            const idPedido = resultPedido[0].ID;

            const queryItens = ' SELECT ' +
                ' IP.ID, IP.QUANTIDADE, IP.VLRUNIT, P.CODIGO AS COD_PROD, P.CODIGO, P.NOME, P.DESCRICAO ' +
                ' FROM ITEMPEDIDO IP  ' +
                ' INNER JOIN PRODUTO P ON P.ID = IP.PEDIDO_ID ' +
                ' WHERE IP.PEDIDO_ID = ' + idPedido;

            console.log(queryItens);

            connection.query(queryItens, (error, resultPedido) => {

                if (error) {
                    callback(error, false);
                    return;
                }

                const itens = [];

                for (item of resultPedido) {
                    let itempedido = {
                        ID: item.ID,
                        QUANTIDADE: item.QUANTIDADE,
                        VLRUNIT: item.VLRUNIT,
                        PRODUTO: {
                            ID: item.COD_PROD,
                            CODIGO: item.CODIGO,
                            NOME: item.NOME,
                            DESCRICAO: item.DESCRICAO
                        }
                    }

                    itens.push(itempedido);
                }
                resultPedido[0].itens = itens;
                callback(error, resultPedido);
            });
        });
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