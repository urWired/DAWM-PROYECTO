-- INSERT TABLA TIPOUSUARIOS
INSERT INTO tipodonantes (descripcion)
VALUES
("Natural"),
("Empresa");

SELECT * FROM asvolh.tipodonantes; 

-- INSERT TABLA TIPOUSUARIOS
INSERT INTO tipousuarios (descripcion)
VALUES
("Administrador"),
("Donante"),
("Voluntario");

SELECT * FROM asvolh.tipousuarios;

-- INSERT TABLA ADMINISTRADORES
INSERT INTO administradores (usuario, contrasenia, tipo_usuario)
VALUES
("nintriago", "1234", 1),
("mdelrosario", "1234", 1),
("dgarcia", "1234", 1),
("ocoello", "1234", 1);

SELECT * FROM asvolh.administradores;

-- INSERT TABLA ESTABLECIMIENTOS
INSERT INTO establecimientos (nombre, direccion)
VALUES
("Albergue Rosa Eva Aguilar de Sánchez", "José Mascote 901 y Av. 9 de Octubre - Guayaquil, Ecuador"),
("Hospital de la Mujer Alfredo Paulson", "Av Dr. Roberto Gilbert y Av de la Democracia - Guayaquil, Ecuador"),
("Hospital de Niños Dr. Roberto Gilbert", "Av. Roberto Gilbert y Sufragio Libre - Guayaquil, Ecuador"),
("Hospital Luis Vernaza", "Loja No. 700 y Escobedo - Guayaquil, Ecuador"),
("Instituto de Neurociencias", "Av. Pedro Menéndez Gilbert - Guayaquil, Ecuador");

SELECT * FROM asvolh.establecimientos;

-- INSERT TABLA VOLUNTARIADOS
INSERT INTO voluntariados (nombre_area, cantidad, id_establecimiento)
VALUES
("Plan Canguro", 100, 1),
("Taller de Mallas", 50, 2),
("Bazar", 20, 3);

SELECT * FROM asvolh.voluntariados;

SELECT * FROM asvolh.voluntarios;
SELECT * FROM asvolh.donantes;
