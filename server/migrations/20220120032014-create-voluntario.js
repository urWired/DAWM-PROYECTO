'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('voluntarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cedula: {
        type: Sequelize.INTEGER
      },
      referencia: {
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      tipo_usuario: {
        type: Sequelize.INTEGER
      },
      id_voluntariado: {
        type: Sequelize.INTEGER
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      },
      fecha_ingreso: {
        type: Sequelize.DATE
      },
      motivo_ingreso: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('voluntarios');
  }
};