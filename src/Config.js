//Importamos el modulo config
import { config } from "dotenv";

// Cargamos las variables de entorno desde el archivo .env
config();

//Definimos constantes con los valores de las variables de entorno
export const PORT = process.env.PORT || 3000;
export const DB_HOST= process.env.DB_HOST ||' localhost';
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'AB12345A';
export const DB_DATABASE = process.env.DB_DATABASE || 'eventify';