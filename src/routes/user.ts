import { Router } from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/id', userController.getUser);
router.get('/login', userController.login);
router.get('/renew', userController.renewToken);
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.delete('/', userController.deleteUser);

export { router };