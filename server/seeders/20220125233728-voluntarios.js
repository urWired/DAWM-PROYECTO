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
      await queryInterface.bulkInsert('Voluntarios', [{
          cedula: generarCedula(),
          nombres: 'Nombre '+i,
          apellidos: 'Apellido'+i,
          correo: 'random@email.com',
          celular: generarCedula(),
          direccion: "Guayaquil, Ecuador",
          tipo_usuario: 3,
          id_voluntariado: 1,
          fecha_nacimiento: new Date(),
          fecha_ingreso: new Date(),
          motivo_ingreso: "Colaboración"
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Voluntarios', null, {});
  }
};
