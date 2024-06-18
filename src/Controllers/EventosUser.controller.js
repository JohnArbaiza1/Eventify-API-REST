//Controladores de la API REST para los eventos asociados a un dterminado usuario

//importamos la conexion
import { pool } from "../db/db.js";

//Controlador encargado de mostrar los eventos segun el usuario que lo creo
export const getUserEvento = async (req, res) => {
    try {
        //const userId = req.params.idUsuario;
        const eventos = await pool.query('SELECT * FROM eventos WHERE idUsuario = ?', [req.params.idUsuario]);
       
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

//Controlador encargado de mostrar un evento en especifico segun el usuario que lo creo
export const getUserEvent = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM eventos WHERE idUsuario = ? AND idEvento = ?', [req.params.idUsuario, req.params.idEvento]);
        // Validamos en caso de que no exista el id buscado
        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'Eventos Not Found'
            });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({
            message: 'Algo salió mal'
        });
        console.log(error);
    }
};

//Controlador encargado de actualizar segun el uduario
export const updateEventoUser = async(req,res) =>{
    //Extraemos el valor de los siguientes parámetros
    const {idUsuario,idEvento} = req.params;
    const {nombreEvento,asistentes,Descripción,ubicacion,Fecha,Username,idCategoria,categoria,img, fechaCreacion} = req.body;
    try {
        const [results] = await pool.query('UPDATE eventos SET nombreEvento = IFNULL(?, nombreEvento), asistentes = IFNULL(?, asistentes), Descripción = IFNULL(?, Descripción), ubicacion = IFNULL(?, ubicacion)' +
            ',Fecha = IFNULL(?, Fecha), Username = IFNULL(?, Username), idCategoria = IFNULL(?, idCategoria), categoria = IFNULL(?, categoria), img = IFNULL(?, img), fechaCreacion = IFNULL(?, fechaCreacion)'+
            '  WHERE idUsuario = ? AND idEvento = ?',
            [nombreEvento, asistentes, Descripción, ubicacion, Fecha, Username, idCategoria, categoria, img, fechaCreacion, idUsuario, idEvento]
        );
        
        if(results.affectedRows === 0 ) return res.status(404).json({
            message: 'Eventos Not Found'
        });

        const [rows] = await pool.query('SELECT * FROM eventos WHERE idUsuario = ? AND idEvento = ? ', [idUsuario,idEvento]);
        res.json(rows[0]);
    
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
        console.log(error);
    }
};




