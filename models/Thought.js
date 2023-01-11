const {Schema,model}=require("mongoose")
const moment=require("moment")
const reactionSchema=require("./Reaction")


const ThoughtSchema=new Schema({
    thoughtId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        index:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get:createdAtValue=>moment(createdAtValue).format("MMM DD YYYY hh:mm a")

    },
    thoughtText:{
        type:String,
        required:true,
        minLength:1,
        maxLength:280,
    },
    username:{
        type:String,
        required:true,
    
    },
    reactions:[reactionSchema],
    

},
{
    toJSON:{
        virtuals:true,
        getters:true,
    },
    id:false,
}
)

ThoughtSchema.virtual("reactionCount").get (function(){
    return this.reactions.length
})

const Thought=model("Thought",ThoughtSchema)
module.exports=Thought