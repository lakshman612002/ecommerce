import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router  from './routes/route.js';
import DefaultData from './default.js';
import { Connection } from './database/db.js';
const app=express();


const port=8000;
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended :true}));
app.use(bodyParser.urlencoded({extended :true}));
app.use('/',Router);
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);
app.listen(port,()=>console.log(`successfully running the port ${port}`));
DefaultData();
