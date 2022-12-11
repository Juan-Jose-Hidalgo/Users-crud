import { Router } from "express";
import { readdirSync } from 'fs'; //Esta importación es necesaria para leer los archivos del directorio rutas.

const PATH_ROUTER = `${__dirname}`; //__dirname devuelve la ruta del directorio actual.
const router = Router();

/**
 * Limpia los nombres sacándoles la extensión para usarlos como rutas.
 * item.ts => item.
 * 
 * @param fileName 
 * @returns retorna el nombre del archivo sin la extensión.
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

/**
 * Se encarga de leer cuántos y cuales archivos existen en el directorio.
 */
readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);

    //El archivo index no es una ruta, por lo tanto no interesa.
    if (cleanName !== 'index') {
        //Importación dinámica de los archivos de rutas.
        import(`./${cleanName}`)
            .then((moduleRouter) => {
                router.use(`/${cleanName}`, moduleRouter.router); //moduleRouter.router es el router de cada archivo de ruta.
            });
    }
});

export { router };