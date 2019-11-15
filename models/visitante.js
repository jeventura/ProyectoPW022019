const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VisitanteSchema = Schema({
    nombre: {
        type: String,
        required: true,
        min: [3, "Introduzca un nombre completo"]
       
    },
    Documento: {
        type: Number,
        required: true
        unique:true
        min:[9, "Introduzca documento completo"]
    },
    tipo: {
        type: String,
    },
    Placa:{
        type: String,
        required:true
        min: [3, 'formato incorrecto'],
        max: 7
    }
    Descripcion:{
        type: String,
        required: true
        min:[3, 'Incluya una descripcion']

    }
}
);
module.exports = mongoose.model("Visitante", VisitanteSchema);