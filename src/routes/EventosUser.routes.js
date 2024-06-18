import { Router } from 'express'
import {
    getUserEvento,
    getUserEvent,
    updateEventoUser
} from '../Controllers/EventosUser.controller.js'

const router = Router();

router.get('/EventosUser/:idUsuario',getUserEvento);
router.get('/EventosUser/:idUsuario/:idEvento', getUserEvent);
router.patch('/EventosUser/:idUsuario/:idEvento', updateEventoUser);

export default router;