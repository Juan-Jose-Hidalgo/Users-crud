import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo id es obligatorio.'
            }
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo nombre es obligatorio.'
            }
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo username es obligatorio.'
            }
        },
        unique: true

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'El campo email es obligatorio.'
            },
            isEmail: {
                msg: 'Formato de email incorrecto.'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo contraseña es obligatorio.'
            }
        }
    },
    imgProfile: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imgBackground: {
        type: DataTypes.STRING,
        allowNull: true
    }
});