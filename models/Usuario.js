const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    usuario: {
        type: String,
        //required: true,
        //min: [3, "Introduzca su usuario"],
       
    },

    contrasena:{
        type: String,
        //equired: true, validate: /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/,
        //min: [8, "Introduzca su password"],
       
    },

    tipousuario:{
        type: String,
        
       
    },

    codigo:{
        type: String,
        //required: true,
        //min: [3, "Ingrese su codigo"],
       
    },

    nombre: {
        type: String,
        //required: true,
        //min: [3, "Introduzca un nombre completo"],
       
    },

    documento: {
        type: String,
        //required: true,
        //unique:true,
        //min:[9, "Introduzca documento completo"]
    },
    

    telefono:{
        type: String, 
        //required: false, validate: /^\d{8}$/,
        //min: [8, 'formato incorrecto'],
    },

    correo:{
        type: String,
        //required: false, validate:/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,
        //min:[12, 'Introduzca un correo electronico']

    }
}
);
module.exports = mongoose.model("user", UsuarioSchema);