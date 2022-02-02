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
      this.belongsTo(models.tipoDonante);
      this.hasMany(models.donacion);
    }
  };
  donante.init({
    cedula: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    fecha_nacimiento: DataTypes.DATE,
    direccion: DataTypes.STRING,
    tipo_donante: DataTypes.INTEGER,
    contacto: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tipoUsuarioId: false,
    tipoDonanteId: false,
    modelName: 'donante',
    tableName: 'donantes'
  });
  return donante;
};