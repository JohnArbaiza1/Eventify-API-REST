//importamos el modulo route de express
import { Router } from 'express';

//Importamos la conexion a la DB
import { One } from '../Controllers/index.controller.js';

//Definimos un enroutador
const router = Router();

//Establecemos la ruta
router.get('/One', One)

// Exportamos el enrutador como valor predeterminado
export default router;