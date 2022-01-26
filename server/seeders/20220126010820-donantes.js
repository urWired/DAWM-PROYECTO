'use strict';

const generarCedula = () => {
  var cedula = "0";
  for (let i = 0; i < 9; i++) {
    let num = String(Math.random()*10);
    num = parseInt(num, 10);
    cedula += num;
  }
  return cedula;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i <10; i++) {
      await queryInterface.bulkInsert('Donantes', [{
          cedula: generarCedula(),
          nombres: 'Nombre '+i,
          apellidos: "Apellido "+i,
          tipo_usuario: 2,
          correo: "random@hotmail.com",
          fecha_nacimiento: new Date(),
          direccion: "Guayaquil, Ecuador",
          tipo_donante: 1,
          contacto: "0939001295"
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Donantes', null, {});
  }
};
