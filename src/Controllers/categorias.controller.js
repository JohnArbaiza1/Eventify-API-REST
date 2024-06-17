//Controladores de la API REST para las categorias

//importamos la conexion
import { pool } from "../db/db.js";

//Controlador encargado de mostrar los datos de las categorias
export const getCategorias = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');
        res.json(rows) 
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de mostrar el dato de una categoria
export const getCategoria = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM categorias WHERE idCategoria = ? ', [req.params.idCategoria])
        // Si no se encontraron resultados, devuelve un error 404 y un mensaje
        if(rows.length <= 0) return res.status(404).json({
            message:'Categoria Not Found'
        })
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};