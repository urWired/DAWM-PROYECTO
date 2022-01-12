# ASVOLH - Asociación de Voluntariado Hospitalario

Proyecto perteneciente a la materia Desarrollo de Aplicaciones Web y Móviles (2021-2S)

# Instalación y configuración del servidor
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
Cambie las credenciales de config.json por las de su motor de MySQL Workbench
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

# Instalación y configuración del cliente
Los siguientes comandos deben ser ejecutados desde el directorio cliente para su correcta instalación:
