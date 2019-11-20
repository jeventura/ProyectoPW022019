//obtener todo
const Register =require("./../models/visitante");

//insertar nuevos vistantes
const insert =(req, res)=>{
    const visitante = new Register(req.body);
    visitante.save ((error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(201).json({
            msg: "creado",
            register:documents
        });
    });
};

//buscar por id
const getOneRegister= (req,res)=>{
    Register.findById(req.params.id, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            registers:documents
        });
    });
}

//funcion de todos los registros guardados en la base
const getRegister = (req,res)=>{
    Register.find({}, (error, documents)=>{
        if(error)
            return res.status(500).json({
                msg:"hubo un error"
            });
        return res.status(200).json({
            msg:"ok",
            registers:documents
        });
    });
};

const update = (req, res)=>{
    let register = req.body
    
    if(!register._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.update({_id: register._id}, register)
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

const deleteById = (req, res)=>{
    let register = req.body;

    if(!register._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Register.deleteOne({_id:register._id})
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
    getRegister,
    insert,
    getOneRegister,
    update,
    deleteById
    
};