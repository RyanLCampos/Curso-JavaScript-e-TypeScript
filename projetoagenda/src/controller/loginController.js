const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) {

    try {
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { // Salva a sessão
                return res.redirect('/login');     // Call back para a pagina anterior
            });
            return;
        }

        req.flash('success', 'Cadastrado com sucesso!');
        req.session.save(function() { // Salva a sessão
            return res.redirect('/login');     // Call back para a pagina home
        });
    }catch (e) {
        console.log(e);
        return res.render('404');
    }
};