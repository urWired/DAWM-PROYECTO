var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Donante = require('../models').donante;

/* CREATE */
router.post('/', (req, res, next) => {
    if (!req.body) {
        res.status(400).send({message: "Contenido vacío!"});
        return;
    }

    const donante = {
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        contacto: req.body.celular,
        direccion: req.body.direccion,
        tipo_usuario: req.body.tipo_usuario,
        tipo_donante: req.body.tipo_donante,
        fecha_nacimiento: req.body.fecha_nacimiento,
    };

    Donante.create(donante, {
        attributes: { exclude: ["id", "createdAt", "updatedAt", "tipoDonanteId", "donacionId", "tipoUsuarioId"] }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error al crear nuevo voluntario"});
    });
});

/* GET ALL */
router.get('/', (req, res, next) => {
    Donante.findAll({ 
        attributes: { exclude: ["id", "createdAt", "updatedAt", "donacionId", "tipoDonanteId", "tipoUsuarioId"] }
    })
    .then(donantes => {
        res.send(donantes)
    })
    .catch(error => res.status(400).send(error))
});

module.exports = router;