import express from 'express';
import alunoController from '../controller/AlunoController';

import loginRequered from '../middlewares/loginRequired';

const router = express.Router();

router.get('/', alunoController.index);
router.post('/', loginRequered, alunoController.store);
router.get('/:id', alunoController.show);
router.put('/:id', loginRequered, alunoController.update);
router.delete('/:id', loginRequered, alunoController.delete);

export default router;
