import React from 'react'
import ReactPlayer from 'react-player'



const Audio = () => {
    
    return (
        <div>
          <ReactPlayer 
            width="350px"
            height="60px"
            playing={false}
            controls={true}
            url='https://freesound.org/data/previews/448/448573_9311684-lq.mp3'
            // url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
          />
        </div>
    );
}


export default Audio;