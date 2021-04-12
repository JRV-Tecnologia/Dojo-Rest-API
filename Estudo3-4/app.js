const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rotaCliente = require('./routes/cliente');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/cliente', rotaCliente);



module.exports = app;