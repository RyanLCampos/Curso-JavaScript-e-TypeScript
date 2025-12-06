const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado');
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
            return res.redirect('/');     // Call back para a pagina home
        });
    }catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function(req, res) {

    try {
        const login = new Login(req.body);
        await login.entrar();

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { // Salva a sessão
                return res.redirect('/login');     // Call back para a pagina anterior
            });
            return;
        }

        if(!login.user) {
            req.flash('errors', login.errors);
            req.session.save(function() { // Salva a sessão
                return res.redirect('/login');     // Call back para a pagina anterior
            });
            return;
        }

        req.flash('success', 'Logado com sucesso!');
        req.session.user = login.user;
        req.session.save(function() { // Salva a sessão
            return res.redirect('/login');     // Call back para a pagina home
        });
    }catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = function(req, res) {
    req.session.destroy();
    res.redirect('/');
}