'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monto: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      donante: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'donantes',
          key: 'cedula'
        }
      },
      detalles: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('donacions');
  }
};