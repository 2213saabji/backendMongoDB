const {Schema,model}=require("mongoose")

const userSchema= new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const userModal=model("users",userSchema)

module.exports=userModal