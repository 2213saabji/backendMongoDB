const express=require("express");
const Router=express.Router();
const {getalldata,insertuser}=require("../controllers/userController");

Router.get("/alldata",getalldata)
Router.post("/insertuser",insertuser)



module.exports = Router;