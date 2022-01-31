'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.administrador);
    }
  };
  noticia.init({
    titulo: DataTypes.STRING,
    fecha_publicacion: DataTypes.DATE,
    contenido: DataTypes.TEXT("long"),
    id_creador: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'noticia',
    tableName: 'noticias'
  });
  return noticia;
};