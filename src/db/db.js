//Importamos el modulo createPool de mysql2
import { createPool } from 'mysql2/promise';

//Importamos las configuraciones de la DB
import{
    DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE
} from '../Config.js'

//Definimos una constante para almacenar la conexión creada ademas
//la conexión (pool) permite reutilizar conexiones a la base de datos.
export const pool = createPool({
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    port : DB_PORT,
    database : DB_DATABASE

});
