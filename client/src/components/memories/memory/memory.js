import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import {deleteMemory } from "../../../redux/actions/memoriesActions" 
const Memory = ({ memory, setCurrentId,currentId }) => {
    const dispatch = useDispatch();
  const classes = useStyles();
    return (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={memory.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={memory.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{memory.creator}</Typography>
            <Typography variant="body2">{moment(memory.createdAt).fromNow()}</Typography>
          </div>
          <div className={classes.overlay2}>
            <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(memory._id)}><MoreHorizIcon fontSize="default" /></Button>
          </div>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{memory.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{memory.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{memory.message}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary"><ThumbUpAltIcon fontSize="small" /> Like {memory.likeCount} </Button>
            <Button  color="primary" ><DeleteIcon fontSize="small" onClick={() => dispatch(deleteMemory(memory._id))}/> Delete</Button>
          </CardActions>
        </Card>
      );
}
export default Memory;