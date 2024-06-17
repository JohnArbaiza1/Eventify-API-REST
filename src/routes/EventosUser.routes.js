import { Router } from 'express'
import {
    getUserEvento
} from '../Controllers/EventosUser.controller.js'

const router = Router();

router.get('/EventosUser/:idUsuario',getUserEvento)

export default router;