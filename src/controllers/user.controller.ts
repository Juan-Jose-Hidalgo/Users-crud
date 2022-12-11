import { Request, Response } from 'express';
import { User } from '../models/user.model';
import userService from '../services/user.service';
import jwt from 'jsonwebtoken';
class UserController {

    async createUser({ body }: Request, res: Response) {
        try {
            const { name, username, email, password, imgProfile, imgBackground } = body;
            const newUser = await userService.register(name, username, email, password, imgProfile, imgBackground);

            //Enviar la respuesta
            res.status(200).send(newUser);

        } catch (error: any) {
            console.log('Error', error);
            res.status(error?.status || 500).send({ status: 'Failed', data: { error: error.message || error } });
        }
    }

    /**
     * Realiza una petición a la BBDD y envía una respuesta con la data.
     * 
     * @param param0 body de la request con el atributo id.
     * @param res response de la petición.
     */
    async getUser({ body }: Request, res: Response) {
        try {
            const { id } = body;
            if (!id) res.status(400).send({ status: 'Failed', data: { error: 'El campo ID es requerido' } });

            const user: any = await User.findByPk(id);

            res.status(200).send({ status: 'OK', data: { user } });

        } catch (error: any) {
            res.status(error?.status || 500).send({ status: 'Failed', data: { error: error.message || error } });
        }
    }

    /**
     * Recibe la data de la petición y solicita al servicio la comprobación de las credenciales
     * del usuario que se quiere loguear.
     * Envía una respuesta acorde con el resultado de la comprobación.
     * 
     * @param param0 body de la request con el email y el password.
     * @param res response de la petición.
     */
    async login({ body }: Request, res: Response) {
        try {
            const { email, password } = body;
            const user: any = await userService.login(email, password);

            //Enviar la respuesta con la data.
            res.status(200).send(user);
        } catch (error: any) {
            res.status(error?.status || 500).send({ status: 'Failed', data: { error: error.message || error } });
        }
    }

    /**
     * Realiza una query de actualización con los datos recibidos a través del body de la request.
     * 
     * @param param0 body de la request con los campos que tienen que ser actualizados.
     * @param res response de la petición.
     */
    async updateUser({ body }: Request, res: Response) {
        try {
            const { id, username, email, office, imgProfile, imgBackground } = body;
            const updatedUser = await User.update(
                { username, email, office, imgProfile, imgBackground },
                { where: { id } }
            );
            res.status(200).send({ status: 'OK', data: updatedUser });
        } catch (error: any) {
            res.status(error?.status || 500).send({ status: 'Failed', data: { error: error.message || error } });
        }
    }

    /**
     * Elimina un usuario de la BBDD.
     * 
     * @param param0 body de la request que contiene el id del usuario.
     * @param res response de la petición.
     */
    async deleteUser({ body }: Request, res: Response) {
        try {
            const { id } = body;
            const deletedUser = await User.destroy({ where: { id } });
            res.status(200).send({ status: 'OK', data: deletedUser });
        } catch (error: any) {
            res.status(error?.status || 500).send({ status: 'Failed', data: { error: error.message || error } });
        }
    }

    /**
     * Renovar JsonWebToken.
     * 
     * @param param0 body de la request que lleva el id del usuario.
     * @param res response.
     */
    async renewToken({ body }: Request, res: Response) {
        const { id } = body;
        const user: any = await User.findByPk(id);
        const key = `${process.env.JWT_SECRET}`;
        const token = jwt.sign({ id }, key, { expiresIn: 60 * 60 * 12 });
        res.status(200).send({ status: 'OK', data: { user, token } });
    }
}

const userController = new UserController;
export default userController;
