var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var adminRouter = require('./routes/administradores');
var noticiasRouter = require('./routes/noticias');
var voluntariosRouter = require('./routes/voluntarios');
var donantesRouter = require('./routes/donantes');
var donacionesRouter = require('./routes/donaciones');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admins', adminRouter);
app.use('/noticias', noticiasRouter);
app.use('/voluntarios', voluntariosRouter);
app.use('/donantes', donantesRouter);
app.use('/donaciones', donacionesRouter);

module.exports = app;
