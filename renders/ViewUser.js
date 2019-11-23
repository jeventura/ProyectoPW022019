const User =require("./../models/Usuario");

const insert =(req, res)=>{
    const usuario = new User(req.body);
    usuario.save ((error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(201).render({
            msg: "creado",
            user:documents
        });
    });
};

const getOneUser= (req,res)=>{
    User.findById(req.params.id, (error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(200).render({
            msg:"ok",
            users:documents
        });
    });
}

const getUser = (req,res)=>{
    User.find({}, (error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(200).render({
            msg:"ok",
            users:documents
        });
    });
};

//Edita un elemento
const update = (req, res)=>{
    let user = req.body
    
    if(!user._id){
        return res.status(400).render({
            message: "id is needed",
        }); 
    }

    User.update({_id: user._id}, user)
        .then(value =>{
            res.status(200).render({
                message: "update register was successful"
            });
        })
        .catch((err)=>{
            res.status(500).render({
                message: "Something happend trying to update the Register"
            });
        })

}
//Elimina un elemento por su id
const deleteById = (req, res)=>{
    let user = req.body;

    if(!user._id){
        return res.status(400).render({
            message: "id is needed",
        }); 
    }

    User.deleteOne({_id:user._id})
        .then(deleted=>{
            res.status(200).render({
                message: "delete register was successful"
            });
        })
        .catch(err=>{
            res.status(500).render({
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