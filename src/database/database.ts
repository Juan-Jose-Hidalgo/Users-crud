import { Sequelize } from 'sequelize';

const host = process.env.DB_HOST;
const password = process.env.DB_PASS;
const database = process.env.DATABASE;
const username = process.env.DB_USER;

export const sequelize = new Sequelize(`${database}`, `${username}`, `${password}`, {
    host: `${host}`,
    dialect: 'postgres',
    logging: false
});