# Users Crud

Language: [English](../README.md) | Español

Pequeña API REST que consiste en un crud de usuarios. Utiliza Nodejs junto con el framework Express y está escrita en TypeScript.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

* La aplicación fue creada con Node en su versión 16.18.1, por lo que recomiendo instalar esta versión o superior. Puedes descargar Node desde su página oficial pulsando en el siguiente enlace: https://nodejs.org/es/download/

* Para la base de datos he utilizado el gestor PostgreSQL. Descarga la versión compatible con tu sistema operativo desde su página: https://www.postgresql.org/download/. Debes tener una base de datos creada y en blanco, ya que el servidor se encargará de crear las tablas con sus campos en el momento de su inicio.

### Instalación 🔧

Una vez instalado Node y Postgres, sitúate dentro de la carpeta del proyecto y ejecuta el siguiente comando:

```
npm install
```

Esto descargará las dependencias necesarias para que funcione el proyecto.

Acto seguido deberás crear un archivo .env en la raíz del proyecto. Este archivo contiene las variables de entorno que utiliza el servidor para conectarse a la base de datos. Tu archivo .env tiene que quedar como en este ejemplo (sustituyendo los valores de ejemplo por los tuyos):

```
PORT=3000
DB_USER=usuario
DB_HOST=localhost
DB_PASS=abc123.
DATABASE=usuarios
JWT_SECRET=iou89070FR/?
```
* PORT: puerto que utilizará el servidor.
* DB_USER: usuario de la base de datos.
* DB_HOST: localhost si la base de datos está en local o la URL si está en un servidor remoto.
* DB_PASS: password del usuario de la base de datos.
* DATABASE: nombre de la base de datos creada previamente.
* JWT_SECRET: clave que se utilizará para crear y firmar los JWT.

Puedes renombrar el archivo .env.example a .env añadiendo tus valores.

## Funcionamiento ⚙️

Para arrancar la aplicación en un entorno de pruebas debes ejecutar el siguiente comando:

```
npm run dev
```

Para iniciar en un entorno de producción se deben ejecutar los siguientes comandos:

```
npm run build
```

Este comando creará la carpeta build en la raíz de la aplicación, en esta carpeta se compila todo el código TypeScript para convertirlo en código JavaScript.

Por último debes ejecutar el comando de arranque:

```
npm run start
```

## Escalabilidad 📦

Aunque el proyecto solo contempla un crud de usuarios, puede ser fácilmente escalable añadiendo las entidades que necesites.

Para agregar más entidades (por ejemplo publicaciones) deberás hacer lo siguiente:

* Crear un nuevo archivo en el directorio models (publications.model.ts). Este archivo representa la tabla publications en tu base de datos. Recuerda que no debes crear la tabla en la base de datos, simplemente reinicia la aplicación y creará la tabla por ti.
* Importa el modelo que has creado en el archivo app.ts.
* Debes crear un nuevo archivo en el directorio controllers. Por ejemplo publication.controller.ts. Este archivo será el encargado de recoger las request y enviar las response relacionadas con las publicaciones.
* Si lo consideras necesario, crea un archivo dentro de services llamado publications.service.ts. Este archivo debería encargarse de realizar la lógica de negocio relacionada con las publicaciones. Es aconsejable que los controladores solo se encarguen de recoger los datos recibidos en la request de la petición y enviar los resultados en la response sin hacer lógica de negocio, para eso es que creamos los servicios.
* Por último deberás crear un nuevo archivo en el directorio routes. Aquí definirás los diferentes endpoints relacionados con las publicaciones que consumirá la aplicación cliente que se conecte con esta api. **Muy importante:** debes nombrar este archivo únicamente con una palabra seguida de su extensión. Ejm publications.ts.

Un archivo importante dentro del directorio routes es el index.ts. Este archivo busca todos los archivos que hay en el directorio routes y los importa de forma dinámica en el archivo app.ts. Por eso mismo, no es necesario que hagas los imports de tus nuevas rutas en app.ts y por eso también, es **muy importante que nombres cada archivo de rutas como te dije anteriormente, en caso contrario no se importarán tus rutas.**

## Construido con 🛠️

Esta aplicación ha sido desarrollada con:

* [NodeJs](https://nodejs.org/en/) - El entorno de ejecución utilizado.
* [ExpressJs](https://expressjs.com/es/) - Framework de Node para la creación sencilla de una API REST.
* [Sequelize](https://sequelize.org/) - ORM para las operaciones con la base de datos.

Puedes consultar el resto de librerías utilizadas en el package.json de la aplicación.

## Dudas, preguntas, consejos... 📖

Actualmente me estoy formando en la rama de desarrollo de aplicaciones web y este proyecto lo he desarrollado como parte de mi formación. Si eres una persona que como yo está aprendiendo y tienes alguna duda sobre parte del código, no dudes en preguntarme e intentaré solucionar tus dudas.

Si por el contrario eres una persona con conocimientos en este mundo y ves errores o cosas que debería mejorar en el desarrollo de la aplicación, agradecería tus consejos.

## Referencias 📌

La idea de la carga dinámica de rutas (el archivo src/routes/index.ts) la he sacado del creador de contenido [Leifer Mendez](https://www.youtube.com/@LeiferMendez), ese script es de su autoría. Si te interesa Angular y la programación en general te recomiendo su canal de Youtube, tiene contenido muy interesante.

Para la estructura de este documento he seguido la plantilla ofrecida por [Andrés Villanueva](https://github.com/Villanuevand), gracias por el aporte. La plantilla completa la puedes encontrar aquí: https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a

## Autor ✒️

**Juan José Hidalgo** - [Juan José Hidalgo](https://github.com/Juan-Jose-Hidalgo) 

:mailbox: Email: juanhidalgoyanez@gmail.com

## Licencia 📄

Este proyecto está bajo la Licencia ISC - mira el archivo [LICENSE-ES.md](LICENSE-ES.md) para detalles.

