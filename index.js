import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import { router } from "./routes/comicRoute.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/comics', router);

let port = process.env.PORT || 5000 ;


app.listen(port, ()=>{
    console.log(`server running at ${port}`)
})