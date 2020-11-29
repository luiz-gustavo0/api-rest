import express from 'express';
import userController from '../controller/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = express.Router();

// Não deveriam existir rotas deste tipo numa aplicação real.
// router.get('/', userController.index);
// router.get('/:id', userController.show);
//
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
