import jwt from 'jsonwebtoken';

/**
 * Genera el JWT retornando una promesa.
 * El payload es la información de usuario que guardará el token.
 * @param id 
 * @param nombre 
 * @returns 
 */
export const generateJWT = (id: number, username: string) => {
    const payload = { id, username };
    const key = `${process.env.SECRET_KEY_TOKEN}`;

    return new Promise((resolve, reject) => {
        jwt.sign(payload, key, {
            expiresIn: '12h'

        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err);

            } else {
                resolve(token);
            }
        });
    });
}