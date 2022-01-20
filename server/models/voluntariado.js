'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voluntariado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  voluntariado.init({
    nombre_area: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    id_establecimiento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'voluntariado',
    tableName: 'voluntariados'
  });
  return voluntariado;
};