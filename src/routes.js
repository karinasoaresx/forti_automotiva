const express = require("express");
const pedidoController = require("./controllers/pedidos");
const routes = express.Router();

//criar rota post
routes.post("/pedidos", pedidoController.adicionarPedido);

//criar rota get
routes.get("/pedidos", pedidoController.listarPedidos);
routes.get("/cliente/:cliente", pedidoController.buscarPedido);

module.exports = routes;