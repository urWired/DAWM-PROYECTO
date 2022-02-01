'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.donante, {
        foreignKey: "donante",
        as: "id_donante"
      });
    }
  };
  donacion.init({
    monto: DataTypes.DOUBLE,
    donante: DataTypes.INTEGER,
    detalles: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'donacion',
    tableName: 'donaciones'
  });
  return donacion;
};