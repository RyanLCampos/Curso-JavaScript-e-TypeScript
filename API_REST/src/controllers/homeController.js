import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Fulano',
      sobrenome: 'Ciclano',
      email: 'fulanociclano@email.com',
      idade: 22,
      peso: 65,
      altura: 1.6,
    });

    res.json(novoAluno);
  }
}

export default new HomeController();
