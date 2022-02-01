# ASVOLH - Asociación de Voluntariado Hospitalario

Proyecto perteneciente a la materia Desarrollo de Aplicaciones Web y Móviles (2021-2S)

## Instalación y configuración del servidor
Los siguientes comandos deben ser ejecutados desde el directorio server para su correcta instalación:
```
npm install -g sequelize-cli
npm install --save sequelize mysql2
npm install --save-dev nodemon
```
Cambie la clave "scripts" dentro de package.json:
```
"scripts": {
     "start": "node ./bin/www",
     "devstart": "set PORT=3001 & nodemon ./bin/www"
}
```
Levante el servidor:
```
npm run devstart
```

Para configurar la base de datos relacional:
```
sequelize init
```
Cambie las credenciales de config.json por las de su motor de MySQL Workbench.<br>
Ejecute los siguientes comandos para inicializar la db:
```
sequelize db:create           Crea la db
sequelize db:migrate          Ejecuta las migraciones y crea las tablas
```
Luego ejecute query_inserts.sql en Workbench para llenar otras tablas.<br>
Para generar datos aleatorios provisionales en la db, ejecute los seeders:
```
sequelize db:seed:all
```
Ejecute el siguiente comando:
```
npm install --save cors
```
Modifique el archivo app.js agregando cors:
```
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
...
var app = express();
app.use(cors());
```

<br>

## Instalación y configuración del cliente
Los siguientes comandos deben ser ejecutados desde el directorio cliente para su correcta instalación:
```npm install
npm install -g @angular/cli   ->   Para instalar el CLI dde Angular
```
Ejecute **ng serve -o** para comprobar que la instalación se realizó correctamente.<br>
Luego, instale Angular Material con el siguiente comando:
```
ng add @angular/material 
```
Acepte todas las configuraciones por defecto. Finalmente, agregue dos dependencias más con los comandos:
```
npm i @angular/cdk --save 
npm i @schematics/angular
```
