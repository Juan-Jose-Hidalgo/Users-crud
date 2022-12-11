import bcrypt from 'bcryptjs';

/**
 * Encripta un password pasado por parámetro.
 * 
 * @param password password que se desea encryptar.
 * @returns password encryptado.
 */
const encrypt = (password: string) => {
    const jumps = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(password, jumps);
    return pass;
}

export { encrypt };