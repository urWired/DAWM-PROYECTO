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
      // define association here
    }
  };
  voluntario.init({
    cedula: DataTypes.INTEGER,
    referencia: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_usuario: DataTypes.INTEGER,
    id_voluntariado: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    fecha_ingreso: DataTypes.DATE,
    motivo_ingreso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'voluntario',
    tableName: 'voluntarios'
  });
  return voluntario;
};