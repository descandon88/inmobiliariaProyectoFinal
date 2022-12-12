exports.verifyPerfil = (req, res, next) => {

    const user = req.user;
    console.log(user)
    if (user.tipo_usuario == "Administrador") {
        next();
    }
    else {
        res.status(401).json({ error: "Acceso al recurso denegado" });
        return;
    }
};


exports.verifyPerfil2 = (req, res, next) => {
    const user = req.user;

    if (user.tipo_usuario == "Comun") {
        next();
    }
    else {
        res.status(401).json({ error: "Acceso al recurso denegado" });
        return;
    }

}

