const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
    res.render('contato', { contato: {} });
};

exports.create = async function(req, res){
    try {
        const contato = new Contato(req.body);
        await contato.create();

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato'));
            return;
        }

        req.flash('success', 'Contato cadastrado com sucesso!');
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
        return;
        
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.editIndex = async function(req, res) {
    try {
        if(!req.params.id) return res.render('404');
    
        const contato = await Contato.buscaPorId(req.params.id);
        
        if (!contato) return res.render('404');
    
        res.render('contato', { contato });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        
        const contato = new Contato(req.body);
    
        await contato.edit(req.params.id);

        if(contato.errors.length > 0) {
            console.log('Entrou aqui!');
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect(`/contato/${req.params.id}`));
            return;
        }

        req.flash('success', 'Contato atualizado com sucesso!');
        req.session.save(() => res.redirect(`/contato/${req.params.id}`));
        return;
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}
