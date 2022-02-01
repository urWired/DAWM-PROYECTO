'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.donacion);
      this.belongsTo(models.tipoDonante)
    }
  };
  donante.init({
    cedula: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    direccion: DataTypes.STRING,
    tipo_donante: DataTypes.INTEGER,
    contacto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donante',
    tableName: 'donantes'
  });
  return donante;
};