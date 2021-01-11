const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//import dos MODELS
const Pedidos = require("../models/Pedidos");

//cria conexão com o banco
const conexao = new Sequelize(dbConfig);

//inicializa os models
Pedidos.init(conexao);

//inicializa os relacionamentos
Pedidos.associate(conexao.models);
