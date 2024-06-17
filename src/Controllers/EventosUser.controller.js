//Controladores de la API REST para los eventos asociados a un dterminado usuario

//importamos la conexion
import { pool } from "../db/db.js";

//Controlador encargado de mostrar evento segun el usuario que lo creo
export const getUserEvento = async (req, res) => {
    try {
        const userId = req.params.idUsuario;
        const eventos = await pool.query('SELECT * FROM Eventos WHERE idUsuario = ?', [userId]);
       
        if (eventos.length > 0) {
            // Mostramos los eventos que esten asociados a este usuario
            res.json(eventos[0]);
        } else {
            // No se encontraron eventos para este usuario
            res.status(404).json({ message: 'No se encontraron eventos para el usuario' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Algo salió mal' });
    }
};

