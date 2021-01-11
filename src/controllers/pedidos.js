const Pedidos = require("../models/Pedidos");

module.exports = {
    //cria a função que vai ser executada pela rota
    async listarPedidos(req, res){

        try {
            const pedidos = await Pedidos.findAll();
            res.send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send({error});
        }
    },

    async buscarPedido(req, res){
        //recuperar o id do aluno
        const clienteName = req.query.name;
        try {
            let pedidos = await Pedidos.findByPk(clienteName, {
                attributes: ["id", "cliente", "produto", "quantidade"]
            });
    
            //se pedidos nao encontrado, retornar not found
            if(!pedidos) {
            return res.status(404).send({erro: "cliente não encontrado"});
        }
            //se pedidos encontrado, retornar pedidos
            res.send(pedidos);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },

    async adicionarPedido(req, res){
        //receber os dados do body
        const{cliente, produto, quantidade} = req.body;
    
        try{
        let pedidos = await Pedidos.findOne();
        pedidos = await Pedidos.create({cliente, produto, quantidade});
        
        res.status(201).send(pedidos);
    }
        catch (error){
            console.log(error);
            res.status(500).send(error);
    }
    }
}