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
      this.hasMany(models.donante);
    }
  };
  tipoDonante.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipoDonante',
    tableName: 'tipoDonantes'
  });
  return tipoDonante;
};