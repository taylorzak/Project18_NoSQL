const {User, Thought}=require("../models")
const user = require("./user")

module.exports={
    createThought:async(request,response)=>{
        const{userId,username,thoughtText}=request.body
        try{
        const thought=await Thought.create({username,thoughtText})
        User.findOneAndUpdate({_id:userId},{$push:{thoughts:thought._id}},{new:true})
        response.json(thought)    
        }catch(e){
            response.json(e)
        }
    },
    getAllThoughts:async(request,response)=>{
        
        try{
        const thoughts=await Thought.find().populate({path:"username"})
       
        response.json(thoughts)    
        }catch(e){
            response.json(e)
        }
    },
    
}
