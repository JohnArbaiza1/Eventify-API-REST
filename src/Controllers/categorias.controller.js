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
        });
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
        });
    }
};

//controlador encargado de agregar nuevas categorias
export const createCategorias = async(req, res) =>{
    const {categoria, Descripción} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO categorias(categoria, Descripción) VALUES (?, ?)', [categoria, Descripción]);
        res.send({
            idCategoria: rows.insertId,
            categoria,
            Descripción
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        });
    }
};

//Controlador encargado de actualizar las categorias 
export const updateCategorias = async(req,res) =>{
    const {idCategoria} = req.params;
    const {categoria, Descripción} = req.body;
    try {
        const [results] = await pool.query('UPDATE categorias SET categoria = IFNULL(?,categoria), Descripción = IFNULL(?, Descripción) WHERE idCategoria = ? ', [categoria,Descripción,idCategoria])
        if(results.affectedRows === 0 ) return res.status(404).json({
            message: 'Categorias Not Found'
        });

        const [rows] = await pool.query('SELECT * FROM categorias WHERE idCategoria = ? ', [idCategoria]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        });
        console.log(error);
    }
}

//contolador que permite eliminar categorias
export const deleteCategorias = async(req, res) =>{
    try {
        const [results] = await pool.query('DELETE FROM categorias WHERE idCategoria = ?', [req.params.idCategoria]);
        if(results <= 0) return res.status(404).json({
            message: 'Eventos not found'
        });
        res.sendStatus(204);

    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        });
        console.log(error);
    }
}
