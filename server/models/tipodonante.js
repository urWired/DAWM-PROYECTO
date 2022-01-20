'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoDonante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tipoDonante.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipoDonante',
  });
  return tipoDonante;
};