import React from 'react';

const Videoditail = ({video}) => {
     if(!video){
            return <div>loading...</div>
        }
        const videosrc =`https://www.youtube.com/embed/${video.id.vedeoId}`
    
    return (
       
        <div>

            <div className='ui embed'>
            <iframe title='video.snippet.title' src={videosrc}/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>
                    {video.snippet.title}
                </h4>
                <p >{video.snippet.description} </p>
            </div>
        </div>
    );
}

export default Videoditail;
