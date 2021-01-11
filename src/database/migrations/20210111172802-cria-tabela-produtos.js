'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser feito
    queryInterface.createTable("pedidos", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      cliente: {
        type: Sequelize.STRING,
        allowNull: false
      },
      produto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser desfeito
    queryInterface.dropTable("pedidos");
  }
};
