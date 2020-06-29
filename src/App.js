import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import youtube from './api/axiosYoutubeInstance'
import {SearchBar, VideoDetails, VideoList} from './components'

export default class App extends Component {

    state={
        videos: [],
        currentVideo: null
    }

    componentDidMount (){
        this.onFormSubmitHandler('Javascript')
    }

    onFormSubmitHandler = async (searchTerm)=>{
        console.log(searchTerm)
        const response = await youtube.get('search', {
            params: {
                q: searchTerm,
                part: 'snippet',
                maxResults: 5,
                key: '[GOOGLE API KEY]' 
            }})
        this.setState({
            videos: response.data.items,
            currentVideo: response.data.items[0]
        })
    }

    onVideoClicked = (video)=>{
        this.setState({currentVideo: video})
    }

    render() {

        const {currentVideo, videos} = this.state
        return (
            <Grid container spacing={10} style={{padding: '20px'}}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.onFormSubmitHandler}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video = {currentVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container spacing={10}>
                                <VideoList videos={videos} onVideoClicked={this.onVideoClicked}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
