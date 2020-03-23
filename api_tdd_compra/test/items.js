const assert = require('assert');
const chai = require('chai');
const server = require('../app');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Compras App', function () {

    const itemExemplo = {
        "nome": 'Abacaxi',
        "preco": 1
    };

    const Resultado = {
        "nome": 'Abacaxi',
        "preco": 1,
        "id": 0
    };

    describe("Post Item", function () {
        it('Insere Item', function () {
            const Resultado = 'o item foi incrementado!';
            chai.request(server)
                .post('/items')
                .send(itemExemplo)
                .end(function (req, res) {
                    assert.equal(res.text, Resultado);
                });
        });
    })

    describe("Get All", function () {
        it('Seleciona todos os Items', function () {
            chai.request(server)
                .get('/items')
                .end(function (req, res) {
                    assert.equal(JSON.stringify(res.body), JSON.stringify([Resultado]));
                });
        });
    });


    describe('Get ById', function () {
        it("Retorna Item por id ex: ('/:id' ", function () {
            chai.request(server)
                .get('/items/0')
                .end(function (req, res) {
                    assert.equal(res.text, JSON.stringify(Resultado));
                });
        });

        it("Retorna Item não encontrado", function () {
            chai.request(server)
                .get('/items/9999')
                .end(function (req, res) {
                    assert.equal(res.text, 'Item não encontrado!');
                });
        });

    });

    describe('Put ById', function () {

        it("Atualiza item ", function () {
            chai.request(server)
                .put('/items/0')
                .end(function (req, res) {
                    assert.equal(res.text, 'Item Atualizado com sucesso!');
                });
        });

        it("Atualiza item não encontrado", function () {
            chai.request(server)
                .put('/items/9999')
                .end(function (req, res) {
                    assert.equal(res.text, 'Item não encontrado!');
                });
        });

    });

    describe('Delete ById', function () {
        it("Deleta Item ", function () {
            chai.request(server)
                .delete('/items/0')
                .end(function (req, res) {
                    assert.equal(res.text, 'item removido com sucesso!');
                });
        }); 
    });

});

