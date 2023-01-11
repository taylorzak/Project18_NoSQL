const router=require("express").Router()
const{createuser,getuserbyid,getallusers,updateuserbyid,deleteuserbyid}=require("../../../controllers/user")
router.route("/").get(getallusers).post(createuser)
router.route("/:userId").get(getuserbyid).put(updateuserbyid).delete(deleteuserbyid)
module.exports=router