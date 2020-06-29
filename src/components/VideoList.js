import React from 'react'
import VideoItem from './VideoItem'

const videoList = ({videos, onVideoClicked})=>{
    return(videos.map((video, id)=><VideoItem key={id} video={video} onVideoClicked={onVideoClicked}/>))
}

export default videoList 