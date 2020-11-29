import express from 'express';
import homeController from '../controller/HomeController';

const router = express.Router();

router.get('/', homeController.index);

export default router;
