var express = require('express');
var router = express.Router();
var moment = require('moment');

const sequelize = require('../models/index.js').sequelize;
const Voluntario = require('../models').voluntario;

/* CREATE */
router.post('/', (req, res, next) => {
    if (!req.body) {
        res.status(400).send({message: "Contenido vacío!"});
        return;
    }

    const voluntario = {
        cedula: req.body.cedula,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        celular: req.body.celular,
        direccion: req.body.direccion,
        tipo_usuario: req.body.tipo_usuario,
        id_voluntariado: req.body.voluntariado,
        fecha_nacimiento: req.body.fecha_nacimiento,
        fecha_ingreso: req.body.fecha_ingreso,
        motivo_ingreso: req.body.motivo_ingreso
    };

    Voluntario.create(voluntario, {
        attributes: { exclude: ["id", "createdAt", "updatedAt", "tipoUsuarioId", "voluntariadoId"] }
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
    Voluntario.findAll({ 
        attributes: { exclude: ["id", "createdAt", "updatedAt", "tipoUsuarioId", "voluntariadoId"] }
    })
    .then(voluntarios => {
        res.send(voluntarios)
    })
    .catch(error => res.status(400).send(error))
});

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