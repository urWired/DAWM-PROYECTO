'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('noticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fecha_publicacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contenido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_creador: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'administradores',
          key: 'usuario'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('noticias');
  }
};