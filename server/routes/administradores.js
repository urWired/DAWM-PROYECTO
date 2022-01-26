var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Administrador = require('../models').administrador;

router.get('/:usuario', (req, res, next) => {
   const admin = req.params.usuario;
    Administrador.findAll({ 
       attributes: { exclude: ["id", "createdAt", "updatedAt", "tipoUsuarioId"] },
       where: {"usuario": admin}
     })
     .then(admins => {
        res.send(admins)
     })
     .catch(error => res.status(400).send(error))
  });

module.exports = router;