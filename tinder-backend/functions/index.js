import * as functions from 'firebase-functions';
import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from 'cors'
//App Config
const app = express();
const port =process.env.PORT || 8003;
const connection_url ="mongodb+srv://jpduker:Jpduker@cluster0.kr2e0tb.mongodb.net/?retryWrites=true&w=majority"

//Middlewares
app.use(express.json())
app.use(cors())

//DB config
mongoose.set('strictQuery', false);
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
});

//API Endpoints
app.get('/',(req,res) => {
    res.status(200).send("Hello MERN stack")
});

app.post('/tinder/cards',(req,res) =>{
    const dbCard =req.body
 
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
            
    })
});
app.get('/tinder/cards',(req,res) =>{ 
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
});
export default app