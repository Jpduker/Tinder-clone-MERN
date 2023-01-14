import express from "express";
import mongoose from "mongoose";

//App Config
const app = express();
const port =process.env.PORT || 8001;
const connection_url ="mongodb+srv://jpduker:Jpduker390@cluster0.kr2e0tb.mongodb.net/?retryWrites=true&w=majority"

//Middlewares

//DB config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//API Endpoints
app.get('/',(req,res) => {
    res.status(200).send("Hello MERN stack")
});

//Listner
app.listen(port,()=> console.log(`listening on ${port}`))