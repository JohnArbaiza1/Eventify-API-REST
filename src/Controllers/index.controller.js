// Importamos la conexión a la base de datos desde '../db.js'
import { pool } from '../db/db.js';

//Definimos una funcion que nos ayude a comprobar la conexión con la DB
export const One = async(req, res) =>{
    // Ejecutamos una consulta simple para verificar la conexión
    const [respuesta] = await pool.query('SELECT "ONE PIECE" AS result');
    res.json({
        message:'conexión exitosa.',
        respuesta  
    });
}