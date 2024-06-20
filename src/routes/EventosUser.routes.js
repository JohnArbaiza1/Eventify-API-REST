import { Router } from 'express'
import {
    getUserEvento,
    getUserEvent,
    updateEventoUser,
    deleteUserEvent
} from '../Controllers/EventosUser.controller.js'

const router = Router();

router.get('/EventosUser/:idUsuario',getUserEvento);
router.get('/EventosUser/:idUsuario/:idEvento', getUserEvent);
router.patch('/EventosUser/:idUsuario/:idEvento', updateEventoUser);
router.delete('/EventosUser/:idUsuario/:idEvento', deleteUserEvent);

export default router;