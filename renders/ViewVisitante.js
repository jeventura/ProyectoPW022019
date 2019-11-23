const Register =require("../models/Visitante");


const insert =(req, res)=>{
    const visitante = new Register(req.body);
    visitante.save ((error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(201).render({
            msg: "creado",
            register:documents
        });
    });
};


const getOneVisitante= (req,res)=>{
    Register.findById(req.params.id, (error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(200).render({
            msg:"ok",
            registers:documents
        });
    });
}


const getVisitante = (req,res)=>{
    Register.find({}, (error, documents)=>{
        if(error)
            return res.status(500).render({
                msg:"hubo un error"
            });
        return res.status(200).render({
            msg:"ok",
            registers:documents
        });
    });
};

const update = (req, res)=>{
    let register = req.body
    
    if(!register._id){
        return res.status(400).render({
            message: "id is needed",
        }); 
    }

    Register.update({_id: register._id}, register)
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

const deleteById = (req, res)=>{
    let register = req.body;

    if(!register._id){
        return res.status(400).render({
            message: "id is needed",
        }); 
    }

    Register.deleteOne({_id:register._id})
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
    getVisitante,
    insert,
    getOneVisitante,
    update,
    deleteById  
};