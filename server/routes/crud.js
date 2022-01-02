import express from "express"
const Router=express.Router();
import {addMemory,editmemory,getmemories,deleteMemory} from "../services/crud"

Router.get("/api/v1/memories", getmemories)
Router.post("/api/v1/memories", addMemory)
Router.delete("/api/v1/memories", deleteMemory)
Router.put("/api/v1/memories", editmemory)

export default Router;
