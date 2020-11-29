import express from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controller/FotoController';

const router = express.Router();

router.post('/', loginRequired, fotoController.store);

export default router;
