const validateemail=(email)=>{
    let re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

const {User}=require("../models")

module.exports={
    createuser:async(request,response)=>{
        const {username,email}=request.body
        if(!validateemail(email)){
            return response.status(401).json({error:"provided email address is not valid"})
        }
        try{
            const newuser=await User.create({username,email})
            response.json(newuser)
        }
        catch(e){
            response.json(e)
        }
    },
    getallusers:async(request,response)=>{
        try{
            User.find({})//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
            .then(async(users)=>{
                console.log(users)
                response.json(users)
            })
        }
        catch(e){
            response.json(e)
        }
    },
getuserbyid:async(request,response)=>{
    try{
        const{userId}=request.params;
        const user = await User.findById(userId)//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(user)
    }
    catch(e){
        response.json(e)
    }
},
updateuserbyid:async(request,response)=>{
    try{
        const{userId}=request.params;
        const body=request.body 
        const user = await User.findByIdAndUpdate(userId,body,{new:true,runValidators:true})//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(user)
    }
    catch(e){
        response.json(e)
    }
},
deleteuserbyid:async(request,response)=>{
    try{
        const{userId}=request.params;
        const user = await User.findByIdAndDelete(userId)//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
        
        response.json(user)
    }
    catch(e){
        response.json(e)
    }
},
}