# Users Crud

Language: English | [Español](./docs/README-ES.md)

Small REST API consisting of an user crud. It uses Nodejs along with the Express framework and is written in TypeScript.

## Starting 🚀

_These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes._


### Pre-requisites 📋

* The application was created with Node in its version 16.18.1, so I recommend installing this version or higher. You can download Node from its official website by clicking on the following link: https://nodejs.org/es/download/

* For the database I have used the PostgreSQL manager. Download the version compatible with your operating system from its page: https://www.postgresql.org/download/. You must have a database created and blank, since the server will be in charge of creating the tables with their fields at the moment of its start.

### Instalation 🔧

Once Node and Postgres are installed, go to the project folder and run the following command:

```
npm install
```

This will download the necessary dependencies for the project to work.

Next you must create an .env file in the root of the project. This file contains the environment variables used by the server to connect to the database. Your .env file should look like this example (replacing the example values with your own):

```
PORT=3000
DB_USER=user
DB_HOST=localhost
DB_PASS=abc123.
DATABASE=users
JWT_SECRET=iou89070FR/?
```
* PORT: port to be used by the server.
* DB_USER: database user.
* DB_HOST: localhost if the database is on local or the URL if it is on a remote server.
* DB_PASS: database user pass.
* DATABASE: database name.
* JWT_SECRET: key to be used to create and sign the JWTs.

You can rename the .env.example file to .env by adding your values.

## Operation ⚙️

To start the application in a test environment you must execute the following command:

```
npm run dev
```

To start in a production environment the following commands must be executed:

```
npm run build
```

This command will create the build folder in the root of the application, in this folder all the TypeScript code is compiled to convert it into JavaScript code.

Finally you must execute the boot command:

```
npm run start
```

## Scalability 📦

Although the project only contemplates a crud of users, it can be easily scalable by adding the entities you need.

To add more entities (e.g. publications) you should do the following:

* Create a new file in the models directory (publications.model.ts). This file represents the publications table in your database. Remember that you do not have to create the table in the database, just restart the application and it will create the table for you.
* Import the model you have created in the app.ts file.
* You must create a new file in the controllers directory. For example publication.controller.ts. This file will be in charge of collecting the requests and sending the responses related to the publications.
* If necessary, create a file within services called publications.service.ts. This file should take care of the business logic related to publications. It is advisable that the controllers are only in charge of collecting the data received in the request and send the results in the response without doing business logic, that is why we create the services.
* Finally you must create a new file in the routes directory. Here you will define the different endpoints related to the publications that will be consumed by the client application that connects to this api. **Very important:** you must name this file with only one word followed by its extension. E.g. publications.ts.

An important file inside the routes directory is the index.ts file. This file looks for all the files in the routes directory and imports them dynamically into the app.ts file. For this reason, it is not necessary to import your new routes into app.ts and for this reason, it is also **very important that you name each route file as I said before, otherwise your routes will not be imported.

## Built with 🛠️

This application has been developed with:

* [NodeJs](https://nodejs.org/en/) - The execution environment used.
* [ExpressJs](https://expressjs.com/es/) - Node framework for the simple creation of a REST API.
* [Sequelize](https://sequelize.org/) - ORM for database operations.

You can consult the rest of the libraries used in the package.json of the application.

## Doubts, questions, advice... 📖

I am currently training in the branch of web application development and I have developed this project as part of my training. If you are a person like me who is learning and you have any questions about some of the code, do not hesitate to ask me and I will try to solve your doubts.

If on the other hand you are a person with knowledge in this area and you see errors or things that should be improved in the development of the application, I would appreciate your advice.

## References 📌

I got the idea for the dynamic loading of routes (the src/routes/index.ts file) from the content creator [Leifer Mendez](https://www.youtube.com/@LeiferMendez), that script is of his authorship. If you are interested in Angular and programming in general I recommend his Youtube channel, he has very interesting content.

For the structure of this document I have followed the template provided by [Andrés Villanueva](https://github.com/Villanuevand), thanks for the contribution. You can find the complete template here: https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a

## Autor ✒️

**Juan José Hidalgo** - [Juan José Hidalgo](https://github.com/Juan-Jose-Hidalgo) 

:mailbox: Email: juanhidalgoyanez@gmail.com

## License 📄

This project is licensed under the ISC - see the file [LICENSE.md](./docs/LICENSE.md) for more details.

