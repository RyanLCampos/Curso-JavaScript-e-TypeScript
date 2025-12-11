/*
  PASSOS:

  1. Import Router
  2. Import Controller
  3. Inicializa Router
  4. Adiciona Rotas
  5. Export routes

*/

import { Router } from 'express';

import tokenController from '../controllers/tokenController';

const router = new Router();

router.post('/', tokenController.create);

export default router;
