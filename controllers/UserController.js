const User =require('../models/Visitante');
const userController = {};

userController.getUser = async function (req, res, next) {
    let user = await User.find();
    return res.status(200).json(user);
}


userController.getOneUser = async function (req, res, next) {
    let { id } = req.params;
    let user = await User.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(user);
}

userController.insert = async function (req, res, next) {
    let user = new User();
    user.usuario = req.body.usuario;
    user.contrasena = req.body.contrasena;
    user.confirmarcontrasena = req.body.confirmarcontrasena;
    user.tipodeusuario = req.body.tipodeusuario;
    user.codigo = req.body.codigo;
    user.nombre = req.body.nombre;
    user.documento = req.body.documento;
    user.telefono = req.body.telefono;
    user.correo = req.body.correo;

    try {
        await user.save();
        return res.status(200).json({ "message": "Usuario agregado con exito" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }

}

userController.update = async function (req, res, next) {
    let { id } = req.params;
    let user = {
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        confirmarcontrasena: req.body.confirmarcontrasena,
        tipodeusuario: req.body.tipodeusuario,
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        documento: req.body.documento,
        telefono: req.body.telefono,
        correo: req.body.correo

    }
    console.log(user);
    try {
        await User.update({ _id: id }, user);
        res.status(200).json({ "message": "Usuario actualizado con exito" });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

userController.deleteById  = async function (req, res, next) {
    let { id } = req.params;
    await User.remove({ _id: id });
    res.status(200).json({ "message": "Usuario Eliminado con exito" });
}

module.exports = visitanteController;

