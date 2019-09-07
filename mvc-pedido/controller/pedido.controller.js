const repository = require('../repository/pedido.repository');
const moment = require('moment');
module.exports = {
    find: (req, res) => {
        repository.find((error, result) => {
            if (error) {
                res.status(500).send(error);
            }
            const pedidos = [];

            for (item of result) {

                let pedido = {
                    ID: item.ID,
                    CODIGO: item.COD_PED,
                    DTPEDIDO: moment(item.DTPEDIDO).format('YYYY/DD/MM'),
                    OBSERVACAO: item.OBSERVACAO,
                    CLIENTE: {
                        ID: item.CLIENTE_ID,
                        CODIGO: item.COD_CLI,
                        NOME: item.NOME_CLI,
                        EMAIL: item.EMAIL_CLI,
                    },
                    VENDEDOR: {
                        ID: item.VENDEDOR_ID,
                        CODIGO: item.COD_VEN,
                        NOME: item.NOME_VEN,
                        EMAIL: item.EMAIL_VEN
                    },
                    ITENS: item.itens
                }
                pedidos.push(pedido);
            }
            res.send(pedidos);
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