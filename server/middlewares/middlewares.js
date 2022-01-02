import bodyParser  from "body-parser";
import express   from "express";
import path     from "path";
import  Routes  from "./../routes/crud";
import cors from "cors";
const __dirname = path.resolve();
export const setMeiddlewares=(app)=>{
    app.use(cors());
    app.use(express.json());
    app.use(express.static(path.join(__dirname,'public')));
    app.use(bodyParser.json({
        limit: '50mb'
      }));
      
      app.use(bodyParser.urlencoded({
        limit: '50mb',
        parameterLimit: 100000,
        extended: true 
      }));
    app.use(Routes)
    return app;

}