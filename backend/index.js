import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config({})

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/home",(req,res)=>{
    res.json({
        message: 'I am coming from backend...',
        success: true,
    })
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin : "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send("Server is running...");
})

app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`);
    connectDB();
})