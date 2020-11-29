import express from 'express';
import tokenController from '../controller/TokenController';

const router = express.Router();

router.post('/', tokenController.store);

export default router;
