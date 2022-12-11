import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { sequelize } from './database/database';
import './models/user.model';
/**
 * Importa aquí tus modelos sequelize.
 * Import your models sequelize here.
 */


import { router } from './routes/';

const main = async () => {
    const PORT = process.env.PORT || 3002;
    const app = express();

    //MIDDLEWARES.
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(router);

    try {
        //Sincronizar con la BBDD.
        await sequelize.sync();
        console.log('Conexión a la BBDD establecida correctamente');
        app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

    } catch (error) {
        console.log('No ha sido posible la conexión a la BBDD:', error);
    }
}

main();