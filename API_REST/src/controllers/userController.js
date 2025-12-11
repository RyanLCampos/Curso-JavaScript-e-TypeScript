import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log(`USER ID: ${req.userId}`);
      console.log(`USER EMAIL: ${req.userEmail}`);

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const userAtualizado = await user.update(req.body);

      return res.json(userAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['Usuário não encontrado'],
        });
      }

      await user.destroy();

      return res.status(204).send();
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
