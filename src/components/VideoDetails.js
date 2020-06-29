import React from 'react'

import { Paper, Typography } from '@material-ui/core'

const videoDetail = ({ video }) => {

    if(!video) return <div>Loading..</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (<React.Fragment>
        <Paper elevation={6} style={{ height: '70%' }}>
            {/* <iframe frameBorder='0' height='100%' width='100%' title='Video Player' src='' /> */}
            <iframe width="100%" height="100%" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Paper>
        <Paper elevation={6} style={{ padding: '15px' }}>
            <Typography variant='h4'>{video.snippet.title}-{video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle2'>{video.snippet.description}</Typography>
        </Paper>
    </React.Fragment>)
}



export default videoDetail