import { encrypt } from "../helpers/bcrypt.helper";
import { User } from "../models/user.model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class UserService {

    /**
     * Registra un nuevo usuario en la BBDD.
     * 
     * @param name nombre de usuario.
     * @param username username de usuario.
     * @param email email de usuario.
     * @param password password sin encriptar.
     * @param imgProfile imagen de perfil si la tiene.
     * @param imgBackground imagen de fondo si la tiene.
     * @returns retorna la query.
     */
    async register(name: string, username: string, email: string, password: string, imgProfile: string, imgBackground: string) {
        try {
            const passBcrypt = encrypt(password);
            const newUser: any = await User.create({ name, username, email, password: passBcrypt, imgProfile, imgBackground });

            //Generar JWT
            const id = newUser.id;
            const key = `${process.env.JWT_SECRET}`;
            const token = jwt.sign({ id }, key, { expiresIn: 60 * 60 * 12 });

            return { status: 'OK', data: { user: newUser, token } };
        } catch (error: any) {
            throw {
                status: 400,
                message: error.errors[0].message
            };
        }
    }

    /**
     * Consulta en la BBDD si las credenciales del usuario que se quiere loguear
     * son correctas. En caso de que no lo sean lanza un error.
     * 
     * @param email email del usuario que se quiere loguear.
     * @param password password del usuario que se quiere loguear.
     * @returns retorna la query
     */
    async login(email: string, password: string) {
        try {
            const user: any = await User.findOne({ where: { email } });
            const criptPass = bcrypt.compareSync(password, user?.password);
            if (!criptPass) {
                throw {
                    status: 404,
                    message: 'Email o contraseña incorrectos.'
                }
            }

            //Generar el token JWT.
            const key = `${process.env.JWT_SECRET}`;
            const id = user.id;
            const token = jwt.sign({ id }, key, { expiresIn: 60 * 60 * 12 });

            return { status: 'OK', data: { user, token } };
        } catch (error) {
            throw error;
        }
    }
}

const userService = new UserService();
export default userService;