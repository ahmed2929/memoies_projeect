import logo from './logo.svg';
import {Container,AppBar,Typography,Grid,Grow } from "@material-ui/core"
import Memories  from './components/memories/Memories';
import Form from './components/Form/Form';
import useStyles from './styles';
import {useDispatch} from "react-redux"
import React,{useEffect,useState} from 'react';
import { getMemories } from './redux/actions/memoriesActions';
function App() {
  const [currentId,setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getMemories())

  },[dispatch,currentId])

  return (
    <Container max-width="lg" >
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h6" color="inherit" align="center">
         memories
        </Typography>
        <img src={logo} className={classes.image} alt="logo" width="50" height="50" />
      </AppBar>
      <Grow in>
     <Container >
      <Grid container justify='space-between' alignItems='stretch' spacing={3}>
      <Grid item xs={12} sm={7}>
        <Memories currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>         
        <Grid item xs={12} sm={4}>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </Grid>         
                     
               
      </Grid>
     </Container>
       </Grow> 

    </Container>
  );
}

export default App;
