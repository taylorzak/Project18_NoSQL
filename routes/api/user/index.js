const router=require("express").Router()
const{createuser,getallusers}=require("../../../controllers/user")
router.route("/").get(getallusers).post(createuser)
module.exports=router