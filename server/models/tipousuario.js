'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipoUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Administrador);
      this.hasMany(models.Voluntario);
      this.hasMany(models.Donante);
    }
  };
  tipoUsuario.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipoUsuario',
    tableName: 'tipoUsuarios'
  });
  return tipoUsuario;
};