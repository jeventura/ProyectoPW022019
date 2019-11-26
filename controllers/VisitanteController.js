const Visitante =require('../models/Visitante');
const visitanteController = {};


visitanteController.getVisitante = async function (req, res, next) {
    let visitante = await Visitante.find();
    return res.status(200).json(visitante);
}


visitanteController.getOneVisitante = async function (req, res, next) {
    let { id } = req.params;
    let visitante = await Visitante.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(visitante);
}

visitanteController.insert = async function (req, res, next) {
    let visitante = new Visitante();
    visitante.nombre = req.body.nombre;
    visitante.documento = req.body.documento;
    visitante.tipo = req.body.tipo;
    visitante.placa = req.body.placa;
    visitante.descripcion = req.body.descripcion;

    try {
        await visitante.save();
        return res.status(200).json({ "message": "Usuario agregado con exito" });
    } catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }

}

visitanteController.update = async function (req, res, next) {
    let { id } = req.params;
    let visitante = {
        nombre: req.body.nombre,
        documento: req.body.documento,
        tipo: req.body.tipo,
        placa: req.body.placa,
        decripcion: req.body.descripcion
    }
    console.log(visitante);
    try {
        await Visitante.update({ _id: id }, visitante);
        res.status(200).json({ "message": "Usuario actualizado con exito" });
    }
    catch (err) {
        return res.status(500).json({ err: err, message: "Por favor revise sus datos" });
    }
}

visitanteController.deleteById  = async function (req, res, next) {
    let { id } = req.params;
    await Visitante.remove({ _id: id });
    res.status(200).json({ "message": "Usuario Eliminado con exito" });
}

module.exports = visitanteController;