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

exports.edit = async function(req, res) {
    const contato = await Contato.buscaPorId(req.params.id);

    if (!contato) return res.render('404');

    res.render('contato', { contato });
};