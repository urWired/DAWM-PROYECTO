var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Donacion = require('../models').donacion;

/* GET ALL */
router.get('/', (req, res, next) => {
    Donacion.findAll({ 
        attributes: { }
    })
    .then(donaciones => {
        res.send(donaciones)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;