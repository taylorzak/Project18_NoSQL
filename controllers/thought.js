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
    getthoughtbyid:async(request,response)=>{
    try{
        const{thoughtId}=request.params;
        const thought = await Thought.findById(thoughtId)//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(thought)
    }
    catch(e){
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
    updateThoughtbyid:async(request,response)=>{
    try{
        const{thoughtId}=request.params;
        const body=request.body 
        const thought = await Thought.findByIdAndUpdate(thoughtId,body,{new:true,runValidators:true})//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(thought)
    }
    catch(e){
        response.json(e)
    }
},
    deleteThoughtbyid:async(request,response)=>{
    try{
        const{thoughtId}=request.params;
        const thought = await Thought.findByIdAndDelete(thoughtId)//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(thought)
    }
    catch(e){
        response.json(e)
    }
},
}

