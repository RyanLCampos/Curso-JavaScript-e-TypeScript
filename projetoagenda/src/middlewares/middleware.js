exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) { // Verifica se o usuário está logado
        req.flash('errors', 'Você precisa fazer login.'); // Lança mensagem de erro
        req.session.save(() => res.redirect('/')); // salva sessão e redireciona para a home
        return;
    }

    next();
}