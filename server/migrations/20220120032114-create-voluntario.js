'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('voluntarios', {
      cedula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      referencia: {
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellidos: {
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
      },
      id_voluntariado: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'voluntariados',
          key: 'id'
        }
      },
      fecha_nacimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fecha_ingreso: {
        type: Sequelize.DATE,
        allowNull: false
      },
      motivo_ingreso: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('voluntarios');
  }
};