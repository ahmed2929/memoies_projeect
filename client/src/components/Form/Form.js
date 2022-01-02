import React,{useState,useEffect} from "react";
import { TextField,Button,Typography,Paper} from "@material-ui/core"
import useStyles from "./style";
import FileBase from "react-file-base64"
import { useDispatch,useSelector } from "react-redux";
import { createMemory,editmemory } from "../../redux/actions/memoriesActions";

const Form = ({currentId,setCurrentId}) => {
  const [MemoryData,setMemoryData] = useState({
    title:"",
    creator:"",
    message:"",
    tags:"",
    selectedFile:""
  })
  const dispatch = useDispatch();
  const memory = useSelector((state) => (currentId ? state.memories.find((memo) => memo._id === currentId) : null));
  useEffect(()=>{
    if(memory){
      setMemoryData(memory)
    }
  },[memory])


  const classes = useStyles();
  const handleSubmit=(e)=>{
  e.preventDefault();
   
  if (!currentId) {
    dispatch(createMemory(MemoryData))
  } else {
    dispatch(editmemory(MemoryData,currentId));
   
  }
  clear(e)

  }

  const clear=(e)=>{
    e.preventDefault();
    setCurrentId(null);
    setMemoryData({
      title:"",
      creator:"",
      message:"",
      tags:"",
      selectedFile:""
    })
  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant="h6" style={{color: '#00b7ff'}} >
        {currentId ? `Editing post` : 'Creating a Memory'}
          </Typography>
        <TextField 
        name="creator" 
        variant="outlined" 
        label="Creator" 
        fullWidth
        value={MemoryData.creator}
        onChange={(event)=>setMemoryData({...MemoryData,creator:event.target.value})}
        />
        <TextField 
        name="title" 
        variant="outlined" 
        label="title" 
        fullWidth
        value={MemoryData.title}
        onChange={(event)=>setMemoryData({...MemoryData,title:event.target.value})}
        />
          <TextField 
        name="message" 
        variant="outlined" 
        label="message" 
        fullWidth
        value={MemoryData.message}
        onChange={(event)=>setMemoryData({...MemoryData,message:event.target.value})}
        />
          <TextField 
        name="tags" 
        variant="outlined" 
        label="tags" 
        fullWidth
        value={MemoryData.tags}
        onChange={(event)=>setMemoryData({...MemoryData,tags:event.target.value})}
        />
      <div className={classes.fileInput}>
       <FileBase 
       type="file"
        multiple={false}
        onDone={({base64})=>setMemoryData({...MemoryData,selectedFile:base64})}

       />
      </div>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth >submit</Button>
      <Button className={classes.buttonSubmit} variant="contained" color="secondary" type="submit" size="large" fullWidth onClick={(e)=>clear(e)}>clear</Button>
      </form>


      </Paper>
  );
}
export default Form;