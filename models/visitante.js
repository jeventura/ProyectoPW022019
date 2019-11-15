const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VisitanteSchema = Schema({
    nombre: {
        type: String,
        required: true,
        min: [3, "Introduzca un nombre completo"],
       
    },
    Documento: {
        type: Number,
        required: true,
        unique:true,
        min:[9, "Introduzca documento completo"]
    },
    tipo: {
        type: String,
    },
    Placa:{
        type: String,
        required: false, validate: /[^PNOACVTFMDE][1-9]{1,6}|^(CD|PR|RE|AB|MI|MB)([0-9]{1,5})$|^(PNC)([0-9]{1,4})$/,
        min: [3, 'formato incorrecto'],
        max: 7
    },
    Descripcion:{
        type: String,
        required: true,
        min:[3, 'Incluya una descripcion']

    }
}
);
module.exports = mongoose.model("Visitante", VisitanteSchema);