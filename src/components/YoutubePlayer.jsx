import React from 'react';
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import YouTube from 'react-youtube';


const YoutubePlayer=()=> {
    const{ ref, isComponentVisible,movieId } = useUserAuth();

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    // _onReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    //   };

    return( 
        <div className='absolute m-auto z-[1000000] w-[60vw] bottom-28' ref={ref}>
        {
            isComponentVisible && <YouTube videoId={movieId} opts={opts}  />
        }
        </div>
    )
}

export default YoutubePlayer