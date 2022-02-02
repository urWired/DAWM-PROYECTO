var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Donacion = require('../models').donacion;

/* CREATE */
router.post('/', (req, res, next) => {
    if (!req.body) {
        res.status(400).send({message: "Contenido vacío!"});
        return;
    }
    const donacion = {
        donante: req.body.cedula,
        monto: req.body.monto,
        detalles: req.body.detalles
    };

    Donacion.create(donacion, {
        attributes: { exclude: ["createdAt", "updatedAt"] }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error al registrar donación"});
    });
});

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