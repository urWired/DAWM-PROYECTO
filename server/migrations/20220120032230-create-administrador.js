'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('administradores', {
      usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      contrasenia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipoUsuarios',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('administradores');
  }
};