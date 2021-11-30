import axios from 'axios';

const KEY ='AIzaSyB6UFF18iJVIeSLbl7WuAgRPl-zI1nt6bw';




export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params :{
        part :'snippet',
        maxResults:5,
        key : KEY
    }
}

)