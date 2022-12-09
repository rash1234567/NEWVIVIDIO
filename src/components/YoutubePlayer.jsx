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
      <div className='absolute  w-[100vw] m-auto right-0 lg:w-[60vw] lg:left-0 lg:bottom-28 top-28' ref={ref} style={{zIndex: isComponentVisible?'10000000': -100000}}>
        {
            isComponentVisible && <YouTube videoId={movieId} opts={opts}  />
        }
        </div>
    )
}

export default YoutubePlayer