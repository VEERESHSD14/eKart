import dotenv from 'dotenv'
dotenv.config()
import { Express } from 'express'
import {dbConfig} from '../config/dbConfig'

dbConfig()

//app instance 
let app= express()
 app.get("/",(req,res)=>{
    res.send("eapparel")
 })


 export default app;