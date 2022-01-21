'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class administrador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.tipoUsuario);
      this.hasMany(models.noticia)
    }
  };
  administrador.init({
    usuario: DataTypes.STRING,
    contrasenia: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'administrador',
    tableName: 'administradores'
  });
  return administrador;
};