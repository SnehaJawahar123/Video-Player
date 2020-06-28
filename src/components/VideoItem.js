import React from 'react'

import {Grid, Paper, Typography} from '@material-ui/core'

const videoItem = ({ video, onVideoClicked }) => 
{
    const clickHandler = ()=>{
        onVideoClicked(video)
    }

   return (<Grid item xs={12} >
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={clickHandler}>
            <img src={video.snippet.thumbnails.medium.url} alt='thumbnail'/>
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
        </Paper>
    </Grid>
    )}


export default videoItem