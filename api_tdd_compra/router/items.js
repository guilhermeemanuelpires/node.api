const router = require('express').Router();
const lol = require('lodash');

var items =[]; 

router.get('/', function (req, res) {
    res.send(items);
});

router.get('/:id', function (req, res) {
    const id = req.params.id;

    const item = lol.find(items, function (o) {
        if (o.id == id) {
            return o
        }
    });

    if (!item) {
        res.send('Item não encontrado!');
    } else {
        res.send(item);
    };
});

router.post('/', function (req, res) {
    const item = req.body;
    item.id = items.length;
    items.push(item);
    res.send('o item foi incrementado!');
});

router.delete('/:id', function (req, res) {

    const id = req.params.id;

    const item = lol.remove(items, function (o) {
        if (o.id == id) {
            return o
        }
    });

    console.log(item)

    if (!item) {
        res.send('item não encontrado!');
    } else {
        res.send('item removido com sucesso!');
    };

});

router.put('/:id' , function(req,res){
    
    const id = req.params.id;

    const item = lol.find(items, function (o) {
        if (o.id == id) {
             o.nome = req.body.nome
             o.preco = req.body.preco    
             return o;
        }
    });

    if (!item) {
        res.send('Item não encontrado!');
    } else {
        res.send('Item Atualizado com sucesso!');
    };

});

module.exports = router;