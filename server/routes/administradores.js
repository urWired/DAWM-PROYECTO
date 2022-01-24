var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Administrador = require('../models').administrador;

router.get('/', (req, res, next) => {
    Administrador.findAll({ 
       attributes: { include: ["usuario"] }
     })
     .then(admins => {
        res.send(admins)
     })
     .catch(error => res.status(400).send(error))
  });

module.exports = router;