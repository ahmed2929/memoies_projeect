import express from 'express';

let app = express();


export const  startServer=(port)=>{ 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);  
});
return app;
}