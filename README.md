# Backend
Backend de la aplicación Eagle Solutions

Primeros Pasos a realizar:

Paso 1:
Recordar hacer npm install, ya que el gitignore esta ignorando los paquetes

Paso 2:
Crear el archivo .env
dentro de ella escribir las variables de entorno:

Conexion Base de Datos: 
Crear una base de datos llamada -> eaglesolutions
```
DB_USER=postgres
DB_PASSWORD= ****** 
DB_HOST=localhost:5432 
```
Recordar usar su propia contraseña de Postgres

Paso 3:
Inicializar el backend escribiendo en la terminal...
```
npm start
```