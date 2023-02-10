const {Admin}=require('../models/admins')

const getAdmins = async(req,res)=>{
    try{
        admins =await Admin.find()
        res.status(200).send(admins)
    }catch(err){
        res.status(400).send({
            'status':'fail',
            'message': err.message
        })
    } 
}


module.exports={
    getAdmins
}