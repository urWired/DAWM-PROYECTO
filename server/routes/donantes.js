var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Donante = require('../models').donante;

/* GET ALL */
router.get('/', (req, res, next) => {
    Donante.findAll({ 
        attributes: { }
    })
    .then(donantes => {
        res.send(donantes)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;