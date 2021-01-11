const {Model, DataTypes} = require("sequelize");

class Pedidos extends Model {
    /*
        - configura os campos da tabela
        - os campos automáticos não precisam ser declarados
    */
    static init(sequelize) {
        super.init(
            {
                cliente   : DataTypes.STRING,
                produto   : DataTypes.STRING,
                quantidade: DataTypes.STRING
            },
            {
               sequelize,  
            }
        )
    }
    //configura os relacionamentos
    static associate(Models) {

    }
}

module.exports = Pedidos;