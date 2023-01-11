const express=require("express")
const mongoose=require("mongoose")

const app=express()
const port=3001

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(require("./routes"))
mongoose.connect("mongodb://localhost/socialnetworkapi")
mongoose.set("debug",true)

app.listen(port,()=>console.log(`connected on localhost:${port}`))

