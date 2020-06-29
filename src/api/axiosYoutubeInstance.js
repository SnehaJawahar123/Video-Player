import axios from 'axios'

// This is an axios instance we are creating

const axiosYoutubeInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

export default axiosYoutubeInstance 