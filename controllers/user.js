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
            const users=await User.find({})//.populate({path:"thoughts",select:"-__v"}).select("-__v").sort({_id:-1})
            response.json(users)
        }
        catch(e){
            response.json(e)
        }
    }
}