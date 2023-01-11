const {Schema,model}=require("mongoose")
const moment=require("moment")

const validateemail=(email)=>{
    let re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

const UserSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        trimmed:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:[validateemail,"please provide a valid email address"],
    },
    thought:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    friends:[
        {
            type:Schema.Types.ObjectId,
            ref:"User",
            unique:true,
        }
    ],

},
{
    toJSON:{
        virtuals:true,
        getters:true,
    },
    id:false,
}
)

UserSchema.virtual("friendCount").get (function(){
    return this.friends.length
})

const User=model("User",UserSchema)
module.exports=User