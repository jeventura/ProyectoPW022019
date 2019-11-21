const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    Usuario: {
        type: String,
        required: true,
        min: [3, "Introduzca su usuario"],
       
    },

    Contrasena:{
        type: String,
        required: false, validate: /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/,
        min: [8, "Introduzca su password"],
       
    },

    Confirmarcontrasena:{
        type: String,
        required: false, validate: /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/,
        min: [8, "Confirme nuevamente su password"],
       
    },

    Tipousuario:{
        type: String,
        
       
    },

    Codigo:{
        type: String,
        required: true,
        min: [3, "Ingrese su codigo"],
       
    },

    Nombre: {
        type: String,
        required: true,
        min: [3, "Introduzca un nombre completo"],
       
    },

    Documento: {
        type: String,
        required: true,
        unique:true,
        min:[9, "Introduzca documento completo"]
    },
    

    Telefono:{
        type: String, 
        required: false, validate: /^\d{8}$/,
        min: [8, 'formato incorrecto'],
    },

    Correo:{
        type: String,
        required: false, validate:/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,
        min:[12, 'Introduzca un correo electronico']

    }
}
);
module.exports = mongoose.model("Usuario", UsuarioSchema);