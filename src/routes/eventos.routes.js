//Importamos el modulo Router de express para poder definir rutas
import { Router } from 'express'

//Importamos los controladores para el funcionamiento de las rutas
import {
    getEventos,
    getEvento,
    createEvento,
    updateEvento,
    deleteEvento
} from '../Controllers/eventos.controller.js'

//Definimos un enroutador
const router = Router();

//Configuramos las rutas
router.get('/Eventos',getEventos);
router.get('/Eventos/:idEvento', getEvento);
router.post('/Eventos', createEvento);
router.patch('/Eventos/:idEvento', updateEvento);
router.delete('/Eventos/:idEvento', deleteEvento);

//Exportamos el enroutador
export default router;