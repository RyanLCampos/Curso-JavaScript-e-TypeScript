import { Router } from 'express';

import userController from '../controllers/userController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas que não deveriam existir, pois expõem informações gerais
// router.get('/', userController.index);
// router.get('/informacoes', loginRequired, userController.show);

// Rotas permitidas, pois não expõem dados de terceiros

router.post('/', userController.create);

/*
  Removido :id — usuário só atualiza a si mesmo.
  router.put('/:id', userController.update);
*/
router.put('/', loginRequired, userController.update);

/*
  Removido :id — usuário só exclui a si mesmo.
  router.delete('/:id', userController.delete);
*/
router.delete('/', loginRequired, userController.delete);

export default router;

/* (Geralmente possui no máximo 5 métodos)
  Index -> Lista todos os usuários -> GET
  Create -> Cria usuários -> POST
  Delete -> Apaga um usuário -> DELETE
  Show -> Mostra um usuário -> GET
  Update -> Atualiza um usuário -> PATCH ou PUT
*/
