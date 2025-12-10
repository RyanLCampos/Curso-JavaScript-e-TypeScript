import { Router } from 'express';

import userController from '../controllers/userController';

const router = new Router();

router.post('/', userController.create);

export default router;

/* (Geralmente possui no máximo 5 métodos)
  Index -> Lista todos os usuários -> GET
  Create -> Cria usuários -> POST
  Delete -> Apaga um usuário -> DELETE
  Show -> Mostra um usuário -> GET
  Update -> Atualiza um usuário -> PATCH ou PUT
*/
