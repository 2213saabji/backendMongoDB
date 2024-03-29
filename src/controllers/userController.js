const user =require("../models/userSchema");
const getalldata=async(req,res)=>{
    try{
        const data= await user.find();
        res.status(200).send({message:"success",data:data});
    }
    catch(err){
        res.status(400).send({message:err.message});

    }
}
const insertuser=async(req,res)=>{
    try {
        await user.create(req.body);
        res.status(200).send({ message: "success", data: req.body });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
}


module.exports={getalldata,insertuser};