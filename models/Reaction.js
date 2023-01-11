const {Schema,model}=require("mongoose")
const moment=require("moment")


const ReactionSchema=new Schema({
    reactionId:{
        type:Schema.Types.ObjectId,
        default:()=>new Types.ObjectId()

    },
    createdAt:{
        type:Date,
        default:Date.now,
        get:createdAtValue=>moment(createdAtValue).format("MMM DD YYYY hh:mm a")

    },
    reactionBody:{
        type:String,
        required:true,
        maxLength:280,
    },
    username:{
        type:String,
        required:true,
    
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    toJSON:{
        getters:true,
    },
    id:false,
}
)

module.exports=ReactionSchema