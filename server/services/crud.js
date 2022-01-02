import memorySchem from "../db/memoriesSchema";
export const addMemory = async(req, res) => {
    const  memory = req.body;
    
    try {
        const newMemory = await memorySchem.create(memory);
        res.status(200).json({
            message: "memory added successfully",
            newMemory
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "error occured",
        });
    }
 
    
  
}

export const getmemories = async(req, res) => {
    memorySchem.find({}, (err, memories) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, memories: memories });
        }
    });
  
}

export const editmemory = async(req, res) => {
    console.log("req.body", req.body);
    memorySchem.findOneAndUpdate({ _id: req.body.id}, req.body, (err, memory) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, message: "memory updated" });
        }
    })
 



}

export const deleteMemory = async(req, res) => {
    console.log("currentId delete meory action run",req.query.id);
    memorySchem.remove({ _id: req.query.id }, (err) => {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, message: "memory deleted" });
        }
    })
 



}
