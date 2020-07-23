const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', function (req, res, next) {
    res.render('add', {info: ''});
})

router.post('/', function (req, res, next) {
    let item = req.body;
    console.log(item)
    let sql = `INSERT INTO produtos (nome, preco, ingredientes, logo) VALUES ('${item.nome}', '${item.preco}', '${item.ingredientes}', '${item.logo}');`;
    let query = db.query(sql, (err, data) => {
        if (err) throw err;
        res.render('add', { info: 'Informações adicionadas com sucesso!' });
    })
});

module.exports = router;
