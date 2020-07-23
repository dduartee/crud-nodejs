const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = 'SELECT * FROM produtos';
  let query = db.query(sql, (err, data) => {
    if (err) throw err;
    //res.send(data[0].nome)
    res.render('index', {produtos: data});
  })
});

module.exports = router;
