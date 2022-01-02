import { startServer } from "./Server_config/server";
import {setMeiddlewares} from "./middlewares/middlewares";

import mongoose from "mongoose";
(async function () {
    try {
        let app = await startServer(process.env.PORT || 3001);
        
        app=setMeiddlewares(app);
       
     mongoose.connect('mongodb+srv://AK:2929@cluster0.zpgpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
         err ? console.log(err) : console.log("connected to mongodb");
     })
    
    } catch (error) {
        console.log(error);  
    }
    
    
    
    })();
