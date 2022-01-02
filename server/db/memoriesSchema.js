import mongoose from 'mongoose';


const Schema=mongoose.Schema;

var memory=new Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCounder:{
        type:Number,
        default:0
    },
    createdAt:{
    type:Date,
    default:new Date()
    }




})

export default mongoose.model('memory',memory)