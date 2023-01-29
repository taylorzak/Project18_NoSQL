const router=require("express").Router()
const {getthoughtbyid,deleteThoughtbyid,updateThoughtbyid,getAllThoughts,createThought}=require("../../../controllers/thought")
router.route("/").post(createThought).get(getAllThoughts)
router.route("/:thoughtId").get(getthoughtbyid).put(updateThoughtbyid).delete(deleteThoughtbyid)
module.exports=router