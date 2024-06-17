//Importamos el modulo Router de express para poder definir rutas
import { Router } from 'express'

//Importamos los controladores para el funcionamiento de las rutas
import {
    getCategorias, getCategoria
} from '../Controllers/categorias.controller.js';

//Definimos un enroutador
const router = Router();

//Configuramos las rutas
router.get('/categorias',getCategorias);
router.get('/categorias/:idCategoria', getCategoria);

export default router;