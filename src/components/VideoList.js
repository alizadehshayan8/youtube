import React from 'react';
import Videoitem from './VideoItem';


const Videolist = ({ videos,onVideoSelect }) => {

    const renderlist = videos.map(video => {
        return <Videoitem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

    return (
        <div className=' ui realaxed divided list'>
            {renderlist}
        </div>
    );
}

export default Videolist;
