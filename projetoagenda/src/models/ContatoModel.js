const validator = require('validator');
const { Schema, model } = require('mongoose');

const ContatoSchema = new Schema({ 
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = model('Contato', ContatoSchema);

class Contato {

    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    };

    async create() {
        this.valida();

        if(this.errors.length > 0) return;

        this.contato = await ContatoModel.create(this.body);
    };

    async edit(id) {
        if (typeof id !== 'string') return;
        this.valida();
        if(this.errors.length > 0) return;

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
    }

    valida() {
        this.cleanUp();

        // Primeiro verifica se foi mandado email e depois valida.
        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
        if(!this.body.email && !this.body.telefone) this.errors.push('É necessário inserir e-mail ou telefone.');
    };

    cleanUp() {
        for(const key in this.body){
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            nome: this.body.nome, 
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telefone: this.body.telefone
        };
    };


    static async buscaPorId(id) {
        if (typeof id !== 'string') return null;
        return await ContatoModel.findById(id);
    }

}

module.exports = Contato;
