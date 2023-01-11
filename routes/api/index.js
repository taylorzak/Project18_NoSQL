const router=require("express").Router()
const userroutes=require("./user")
router.use("/users",userroutes)
const thoughtroutes=require("./thought")
router.use("/thoughts",thoughtroutes)
module.exports=router