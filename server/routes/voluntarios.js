var express = require('express');
var router = express.Router();
var moment = require('moment');

const Sequelize = require('sequelize');
const Voluntario = require('../models').voluntario;

/* CREATE */


/* GET BY ID_VOLUNTARIADO */
router.get('/:voluntariado', (req, res, next) => {
    const voluntariado = req.params.voluntariado;
    Voluntario.findAll({ 
        attributes: { },
        where: {"id_voluntariado": voluntariado}
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY MOTIVO_INGRESO */
router.get('/:motivo', (req, res, next) => {
    const motivo = req.params.motivo;
    Voluntario.findAll({ 
        attributes: { },
        where: {'motivo_ingreso': motivo}
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY NOMBRES */
router.get('/:nombres', (req, res, next) => {
    const names = req.params.nombres;
    Voluntario.findAll({ 
        attributes: { },
        where: {"nombres": names}
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY APELLIDOS */
router.get('/:apellidos', (req, res, next) => {
    const apellidos = req.params.apellidos;
    Voluntario.findAll({ 
        attributes: { },
        where: {'apellidos': apellidos}
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY FECHA_INGRESO */
router.get('/:ingreso', (req, res, next) => {
    const fecha = req.params.ingreso;
    pm.environment.set(fecha, moment().format(("YYYY-MM-DD hh:mm:ss")));
    Voluntario.findAll({ 
        attributes: { }
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

/* UPDATE */


/* DELETE */


module.exports = router;