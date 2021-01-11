//importar o express
const express = require("express");

//importar as rotas
const routes = require("./routes");

require("./database");

//cria a aplicação express
const app = express();

//retornar em json
app.use(express.json());

app.use(routes);

//exportar app
module.exports = app;

