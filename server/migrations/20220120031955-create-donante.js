'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donantes', {
      cedula: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
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
      correo: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.DATE,
        allowNull: false
      },
      direccion: {
        type: Sequelize.STRING
      },
      tipo_donante: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipoDonantes',
          key: 'id'
        }
      },
      contacto: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('donantes');
  }
};