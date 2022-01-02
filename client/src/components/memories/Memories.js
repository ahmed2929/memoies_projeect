import React, { useEffect } from "react";
import Memory from "./memory/memory";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './style';
const Memories = ({currentId,setCurrentId}) => {
  const memories = useSelector((state) => state.memories);

  const classes = useStyles();
  return (
    !memories.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {memories.map((memory) => (
          <Grid key={memory._id} item xs={12} sm={6} md={6}>
            <Memory memory={memory} setCurrentId={setCurrentId} currentId={currentId}/>
          </Grid>
        ))}
      </Grid>
    )
  );
}
export default Memories;