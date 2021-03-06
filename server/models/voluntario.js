'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voluntario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.voluntariado);
      this.belongsTo(models.tipoUsuario)
    }
  };
  voluntario.init({
    cedula: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.STRING,
    direccion: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER,
    id_voluntariado: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    fecha_ingreso: DataTypes.DATE,
    motivo_ingreso: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    modelName: 'voluntario',
    tableName: 'voluntarios',
  });
  voluntario.removeAttribute("id");
  return voluntario;
};