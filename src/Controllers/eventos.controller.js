//Controladores de la API REST para los eventos

//importamos la conexion
import { pool } from "../db/db.js";


//Controlador encargado de mostrar los datos de los eventos
export const getEventos = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM eventos');
        //--------------------------------------------------------
        //En esta seccion de codigo formateamos la fecha
        const fechaFormateada = rows.map(evento =>{
            // Extraemos el valor de la columna “Fecha”
            const fechaISO = evento.Fecha
            //Creamos un objeto de fecha a partir de la cadena de fecha en formato ISO
            const fechaObjeto = new Date(fechaISO);
            // Definimos las opciones para formatear la fecha
            const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
            //Formateamos según las opciones especificadas
            const fechaFormateada = fechaObjeto.toLocaleDateString(undefined, opciones);
            return {
                ...evento,
                Fecha: fechaFormateada
            };
        });
        //------------------------------------------------------------
        res.json(fechaFormateada);
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de mostrar el dato de un evento
export const getEvento = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM eventos WHERE idEvento = ?', [req.params.idEvento]);
        //Validamos en caso de que no exita el id buscado
        if(rows.length <= 0 ) return res.status(404).json({
            message: 'Eventos Not Found'
        });
        res.json(rows[0]);  
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de crear los eventos
export const createEvento = async(req,res) =>{
    //Requerimos los datos establecidos segun la db
    const {nombreEvento,asistentes,Descripción,ubicacion,Fecha,idUsuario,Username,idCategoria,categoria,img,fechaCreacion} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO eventos (nombreEvento, asistentes, Descripción, ubicacion '+
            ',Fecha, idUsuario, Username, idCategoria, categoria, img,fechaCreacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',[nombreEvento,asistentes,Descripción,ubicacion,Fecha,idUsuario,Username,idCategoria,categoria,img, fechaCreacion])
            res.send({
                idEvento: rows.insertId,
                nombreEvento,
                asistentes,
                Descripción,
                ubicacion,
                Fecha,
                idUsuario,
                Username,
                idCategoria,
                categoria,
                img,
                fechaCreacion
            })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//controlador encargado de actualizar
export const updateEvento = async(req,res) =>{
    //Extraemos el valor de los siguientes parámetros
    const {idEvento} = req.params;
    const {nombreEvento,asistentes,Descripción,ubicacion,Fecha,idUsuario,Username,idCategoria,categoria,img, fechaCreacion} = req.body;
    try {
        const [results] = await pool.query('UPDATE eventos SET nombreEvento = IFNULL(?, nombreEvento), asistentes = IFNULL(?, asistentes), Descripción = IFNULL(?, Descripción), ubicacion = IFNULL(?, ubicacion)' +
            ',Fecha = IFNULL(?, Fecha), idUsuario = IFNULL(?, idUsuario), Username = IFNULL(?, Username), idCategoria = IFNULL(?, idCategoria), categoria = IFNULL(?, categoria), img = IFNULL(?, img), fechaCreacion = IFNULL(?, fechaCreacion)'+
            '  WHERE idEvento = ?',[nombreEvento,asistentes,Descripción,ubicacion,Fecha,idUsuario,Username,idCategoria,categoria,img, fechaCreacion,idEvento]
        );

        if(results.affectedRows === 0 ) return res.status(404).json({
            message: 'Eventos Not Found'
        });

        const [rows] = await pool.query('SELECT * FROM eventos WHERE idEvento = ?', [idEvento]);
        res.json(rows[0]);
    
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
        console.log(error);
    }
};

//Controlador encargado de eliminar
export const deleteEvento = async(req, res) =>{
    try {
        const [ results] = await pool.query('DELETE FROM eventos  WHERE idEvento = ?', [req.params.idEvento]);
    
        if(results.affectedRows <= 0)return res.status(404).json({
            message: 'Eventos not found'
        })
        res.sendStatus(204);
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}