//Controladores de la API REST para los eventos

//importamos la conexion
import { pool } from "../db/db.js";

//Controlador encargado de mostrar los datos de los eventos
export const getEventos = async(req,res) =>{
    try {
        const [rows] = await pool.query('SELECT * FROM eventos');
        res.json(rows) 
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de mostrar el dato de un evento
export const getEvento = async(req,res) =>{
    try {
        res.json({
            message:'Evento Disponible'
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};


//Controlador encargado de crear los eventos
export const createEvento = async(req,res) =>{
    try {
        res.json({
            message:'Creando Evento'
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//controlador encargado de actualizar
export const updateEvento = async(req,res) =>{
    try {
        res.json({
            message:'Evento Actualizado'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
};

//Controlador encargado de eliminar
export const deleteEvento = async(req, res) =>{
    try {
        res.json({
            message:'Evento Eliminado'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Algo salio mal'
        })
    }
}