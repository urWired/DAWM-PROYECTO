var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Noticia = require('../models').noticia;

/* CREATE */ 


/* GET ALL */
router.get('/', (req, res, next) => {
    Noticia.findAll({ 
       attributes: { },
    })
    .then(noticias => {
        res.send(noticias)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY TITLE */
router.get('/:title', (req, res, next) => {
    const titulo = req.params.title;
    Noticia.findAll({ 
       attributes: { },
       where: {'titulo': {[Sequelize.like]: '%'+titulo+'%'}}
    })
    .then(noticias => {
        res.send(noticias)
    })
    .catch(error => res.status(400).send(error))
});

/* GET BY USER */
router.get('/:user', (req, res, next) => {
    const usuario = req.params.user;
    Noticia.findAll({ 
       attributes: { },
       where: {'id_creador': usuario}
    })
    .then(noticias => {
        res.send(noticias)
    })
    .catch(error => res.status(400).send(error))
});

/* UPDATE */


/* DELETE */


module.exports = router;