//Importamos el modulo execSync de child_process
import {execSync} from 'child_process';
import { log } from 'console';

//Indicamos la lista de modulos requeridos para el proyecto
//const modulosRequeridos = ['express', 'nodemon', 'mysql2', 'dotenv'];
const modulosRequeridos = ['express', 'nodemon', 'mysql2'];

modulosRequeridos.forEach((module) =>{
    try {
        //Se ejecuta el comando npm install para instalar los modulos
        execSync(`npm install ${module}`);
        //Indicamos que se ha instalado todo de forma correcta
        console.log(`${module} instalado de forma correcta`);
    } catch (error) {
        console.log(`Error al instalar ${module}: ${error.message}`);
    }
});