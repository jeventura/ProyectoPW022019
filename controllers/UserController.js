//obtener todo
const User =require("./../models/Usuario");

//insertar nuevos vistantes
const insert =(req, res)=>{
    const usuario = new User(req.body);
    usuario.save ((error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(201).json({
            msg: "creado",
            user:documents
        });
    });
};

//buscar por id
const getOneUser= (req,res)=>{
    User.findById(req.params.id, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            users:documents
        });
    });
}

//funcion de todos los registros guardados en la base
const getUser = (req,res)=>{
    User.find({}, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            users:documents
        });
    });
};

//Edita un elemento
const update = (req, res)=>{
    let user = req.body
    
    if(!user._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    User.update({_id: user._id}, user)
        .then(value =>{
            res.status(200).json({
                message: "update register was successful"
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Something happend trying to update the Register"
            });
        })

}
//Elimina un elemento por su id
const deleteById = (req, res)=>{
    let user = req.body;

    if(!user._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    User.deleteOne({_id:user._id})
        .then(deleted=>{
            res.status(200).json({
                message: "delete register was successful"
            });
        })
        .catch(err=>{
            res.status(500).json({
                message: "Something happend trying to delete the Register"
            });
        })
}

module.exports={
    getUser,
    insert,
    getOneUser,
    update,
    deleteById
    
};